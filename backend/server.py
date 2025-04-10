from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from . import api

from .api import router


app = FastAPI(title="KVDB API")

# (localhost:3000)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
) 

app.include_router(router)