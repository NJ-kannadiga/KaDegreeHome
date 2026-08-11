from pydantic import BaseModel, EmailStr
from typing import Optional
from datetime import datetime

# --- Lead Schemas ---
class LeadCreate(BaseModel):
    name: str
    email: EmailStr
    phone: str
    degree: Optional[str] = None
    college_year: Optional[str] = None
    looking_for: Optional[str] = "AI Internship"
    payment_status: Optional[str] = None

class LeadResponse(LeadCreate):
    id: int
    created_at: datetime

    class Config:
        from_attributes = True

# --- Payment Schemas ---
class CreateOrderRequest(BaseModel):
    amount: int # in paise (e.g. 449900 or 100)
    currency: Optional[str] = "INR"
    name: str
    email: str
    phone: str
    degree: Optional[str] = None
    college_year: Optional[str] = None

class CreateOrderResponse(BaseModel):
    order_id: str
    amount: int
    currency: str
    key_id: str

class VerifyPaymentRequest(BaseModel):
    razorpay_order_id: str
    razorpay_payment_id: str
    razorpay_signature: str

class VerifyPaymentResponse(BaseModel):
    status: str
    message: str

# --- Chat Schemas ---
class ChatMessageRequest(BaseModel):
    session_id: int
    content: str

class ChatMessageResponse(BaseModel):
    response: str
