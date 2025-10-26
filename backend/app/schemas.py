from pydantic import BaseModel
from datetime import date

class SendBase(BaseModel):
    style: str
    difficulty: str
    hold_types: str