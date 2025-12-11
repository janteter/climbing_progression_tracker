from sqlmodel import SQLModel, Field
import uuid

class SendBase(SQLModel):
    style: str
    difficulty: str
    holds: str

class SendListItem(SendBase):
    sequence: str

class ClimberBase(SQLModel):
    
    climberID: str = Field(primary_key=True, default_factory=lambda: str(uuid.uuid4()))
    username: str = Field(primary_key=True)
    email: str
    fullname: str

class Token(SQLModel):
    access_token: str
    token_type: str

class TokenData(SQLModel):
    username: str | None = None
