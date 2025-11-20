from sqlmodel import SQLModel, Field


class SendBase(SQLModel):
    style: str
    difficulty: str
    holds: str

class SendListItem(SendBase):
    sequence: str

class ClimberBase(SQLModel):
    username: str = Field(primary_key=True)
    email: str
    fullname: str
