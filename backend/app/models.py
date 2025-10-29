from sqlmodel import SQLModel, Field
from datetime import datetime
import uuid

class Send(SQLModel, table=True):
    __tablename__="Sends"

    date: datetime = Field(primary_key=True, default_factory=datetime.utcnow)
    sequence: str = Field(primary_key=True, default_factory=lambda: str(uuid.uuid4()))
    style: str
    difficulty: str
    holds: str
