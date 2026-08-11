# KaDegree Deployment Architecture & Configuration

This document outlines the hosting platforms, configuration details, and environment variables required for running the KaDegree Full Stack application.

## 1. Frontend (React/Vite)
- **Hosting Platform:** Vercel
- **Live URL:** (Your Vercel Deployment URL)
- **Local Dev Command:** `npm run dev`

### Environment Variables
Vite uses different files depending on the environment:
- **Local:** Uses `.env.local` -> `VITE_API_URL=http://localhost:8000`
- **Production:** Uses `.env.production` -> `VITE_API_URL=https://kadegreehome.onrender.com`

*Note: In the Vercel dashboard, you can also manually set `VITE_API_URL` under Settings -> Environment Variables.*

---

## 2. Backend (FastAPI)
- **Hosting Platform:** Render.com (Web Service)
- **Live URL:** `https://kadegreehome.onrender.com`
- **Local Dev Command:** `python main.py`

### Environment Variables
Your backend requires these variables to run correctly. In Render, these are set under the **Environment** tab:
1. `DATABASE_URL` -> The connection string to your live Neon Postgres DB.
2. `RAZORPAY_KEY_ID` -> Your live Razorpay ID.
3. `RAZORPAY_KEY_SECRET` -> Your live Razorpay Secret.

For **Local Development**, you can use the `backend/.env.local` file to use a local SQLite database and Test Razorpay keys so you don't mess with live production data while developing.

---

## 3. Database (PostgreSQL)
- **Hosting Platform:** Neon.tech (Serverless Postgres)
- **Status:** Live & Connected to Render.
- **Connection Details:** The connection string is provided in the Neon Dashboard and must be injected into the Render Backend `DATABASE_URL` environment variable. 

*Note: The FastAPI backend automatically creates the required tables (`users`, `leads`, `payments`, etc.) upon startup via `Base.metadata.create_all` in `main.py`.*
