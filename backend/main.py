import os
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from database import engine, Base
from routers import payments, leads
from dotenv import load_dotenv

load_dotenv()

# Create database tables automatically
Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="KA Degree API",
    description="FastAPI Backend for KA Degree Platform with Razorpay Payment Integration",
    version="1.0.0"
)

# Enable CORS for React Frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], # In production, replace with specific domain e.g. ["https://kadegree.com"]
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include Routers
app.include_router(payments.router)
app.include_router(leads.router)

@app.get("/")
def root():
    return {
        "status": "online",
        "message": "KA Degree FastAPI Server is running",
        "docs": "/docs"
    }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)
