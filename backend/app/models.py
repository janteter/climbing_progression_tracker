from sqlmodel import SQLModel, Field
from datetime import date
import uuid

class SendBase(SQLModel):
    style: str
    difficulty: str
    holds: str

class SendListItem(SendBase):
    sequence: str
    send_date: date

class ClimberBase(SQLModel):
    
    climberID: str = Field(primary_key=True, default_factory=lambda: str(uuid.uuid4()))
    username: str = Field(unique=True)
    email: str
    fullname: str
