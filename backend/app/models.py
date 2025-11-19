from sqlmodel import SQLModel, Field
from datetime import date
import uuid

class Send(SQLModel, table=True):
    __tablename__="Sends"

    send_date: date = Field(primary_key=True, default_factory=date.today)
    sequence: str = Field(primary_key=True, default_factory=lambda: str(uuid.uuid4()))
    style: str
    difficulty: str
    holds: str

class Climber(SQLModel, table=True):
    __tablename__="Climber"

    username: str
    password: str
    fullname: str
    disabled: bool = Field(default = True)
