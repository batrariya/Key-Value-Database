from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from . import api

from .api import router  # now importing as a router
  # This imports your FastAPI routes

app = FastAPI(title="KVDB API")

# Allow React frontend to connect (localhost:3000)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # your React dev server
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
) 

# Your routes are directly defined in api.py, so they're already active
app.include_router(router)  # mount all routes from api.py