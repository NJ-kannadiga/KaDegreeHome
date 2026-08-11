import os
import hmac
import hashlib
import razorpay
from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from database import get_db
from models import Payment, User, Lead
from schemas import CreateOrderRequest, CreateOrderResponse, VerifyPaymentRequest, VerifyPaymentResponse
from dotenv import load_dotenv

load_dotenv()

router = APIRouter(prefix="/api/payments", tags=["Payments"])

RAZORPAY_KEY_ID = os.getenv("RAZORPAY_KEY_ID", "rzp_live_TOQLi4q37NC4bn")
RAZORPAY_KEY_SECRET = os.getenv("RAZORPAY_KEY_SECRET", "Z4tPDBB9O6B2bEM8Z1DBidZk")

client = razorpay.Client(auth=(RAZORPAY_KEY_ID, RAZORPAY_KEY_SECRET))

@router.post("/create-order", response_model=CreateOrderResponse)
def create_order(req: CreateOrderRequest, db: Session = Depends(get_db)):
    try:
        # Create or fetch User
        user = db.query(User).filter(User.email == req.email).first()
        if not user:
            user = User(
                name=req.name,
                email=req.email,
                phone=req.phone,
                degree=req.degree,
                college_year=req.college_year
            )
            db.add(user)
            db.commit()
            db.refresh(user)

        # Create Order on Razorpay
        razorpay_order = client.order.create({
            "amount": req.amount,
            "currency": req.currency or "INR",
            "receipt": f"receipt_{user.id}_{int(os.getpid())}",
            "notes": {
                "user_id": str(user.id),
                "name": req.name,
                "email": req.email,
                "degree": req.degree or "",
                "college": req.college_year or ""
            }
        })

        # Save Payment record in Database
        db_payment = Payment(
            user_id=user.id,
            program_name="AI Internship",
            amount=int(req.amount / 100), # Store in Rupees instead of Paise
            currency=req.currency or "INR",
            razorpay_order_id=razorpay_order["id"],
            status="created"
        )
        db.add(db_payment)
        db.commit()

        return CreateOrderResponse(
            order_id=razorpay_order["id"],
            amount=req.amount,
            currency=req.currency or "INR",
            key_id=RAZORPAY_KEY_ID
        )
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Failed to create Razorpay order: {str(e)}"
        )


@router.post("/verify", response_model=VerifyPaymentResponse)
def verify_payment(req: VerifyPaymentRequest, db: Session = Depends(get_db)):
    try:
        # Compute HMAC SHA256 Signature
        data = f"{req.razorpay_order_id}|{req.razorpay_payment_id}"
        expected_signature = hmac.new(
            RAZORPAY_KEY_SECRET.encode("utf-8"),
            data.encode("utf-8"),
            hashlib.sha256
        ).hexdigest()

        if expected_signature == req.razorpay_signature:
            # Update Payment status in Database
            payment = db.query(Payment).filter(Payment.razorpay_order_id == req.razorpay_order_id).first()
            if payment:
                payment.razorpay_payment_id = req.razorpay_payment_id
                payment.razorpay_signature = req.razorpay_signature
                payment.status = "paid"
                db.commit()

            return VerifyPaymentResponse(status="success", message="Payment verified successfully")
        else:
            # Update Payment status to failed
            payment = db.query(Payment).filter(Payment.razorpay_order_id == req.razorpay_order_id).first()
            if payment:
                payment.status = "failed"
                db.commit()

            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail="Invalid payment signature"
            )
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Payment verification failed: {str(e)}"
        )
