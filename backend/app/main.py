from typing import Union

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.databaseConnection import create_db_and_tables 
from app.routers import sends
from app.routers import climber

app = FastAPI(title="Climbing Progression Tracker")

app.add_middleware(
    CORSMiddleware,
    allow_origins="http://127.0.0.1:5173",
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(sends.router)
app.include_router(climber.router)

@app.get("/")
def root():
    return{"message": "Climbing Progression Tracker API"}


@app.on_event("startup")
def on_startup():
    create_db_and_tables()
