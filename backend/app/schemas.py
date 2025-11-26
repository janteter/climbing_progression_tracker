from datetime import date
import uuid
from app.models import SendBase, ClimberBase
from sqlmodel import Field

class ClimberInDB(ClimberBase, table=True):
    __tablename__="Climber"

    hashed_password: str
    disabled: bool = Field(default = True)
    climberID: str = Field(primary_key=True, default_factory=lambda: str(uuid.uuid4()))

class Send(SendBase, table=True):
    __tablename__="Sends"

    send_date: date = Field(primary_key=True, default_factory=date.today)
    sequence: str = Field(primary_key=True, default_factory=lambda: str(uuid.uuid4()))