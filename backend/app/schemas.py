from datetime import date
import uuid
from app.models import SendBase, ClimberBase
from sqlmodel import Field

class ClimberInDB(ClimberBase, table=True):
    __tablename__="Climber"
    
    password: str
    disabled: bool = Field(default = False)

class Send(SendBase, table=True):
    __tablename__="Sends"

    sequence: str = Field(primary_key=True, default_factory=lambda: str(uuid.uuid4()))
    send_date: date = Field(default_factory=date.today)
    climberID: str = Field(foreign_key="Climber.climberID")