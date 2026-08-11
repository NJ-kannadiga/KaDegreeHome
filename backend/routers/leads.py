from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from database import get_db
from models import Lead
from schemas import LeadCreate, LeadResponse

router = APIRouter(prefix="/api/leads", tags=["Leads"])

@router.post("", response_model=LeadResponse)
def submit_lead(lead_in: LeadCreate, db: Session = Depends(get_db)):
    db_lead = Lead(**lead_in.dict())
    db.add(db_lead)
    db.commit()
    db.refresh(db_lead)
    return db_lead

@router.get("", response_model=list[LeadResponse])
def get_leads(db: Session = Depends(get_db)):
    return db.query(Lead).order_by(Lead.id.desc()).all()
