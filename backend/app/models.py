from sqlmodel import SQLModel, Field
from datetime import date

class Send(SQLModel, table=True):
    __tablename__="Sends"

    date: date = Field(primary_key=True)
    sequence: int = Field(primary_key=True)
    style: str
    difficulty: str
    hold_types: str
