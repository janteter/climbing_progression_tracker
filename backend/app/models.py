from sqlmodel import SQLModel, Field
from datetime import datetime

class Send(SQLModel, table=True):
    __tablename__="Sends"

    date: datetime = Field(primary_key=True, default_factory=datetime.utcnow)
    sequence: int = Field(primary_key=True)
    style: str
    difficulty: str
    hold_types: str
