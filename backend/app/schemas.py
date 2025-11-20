from datetime import date
import uuid
from app.models import SendBase, ClimberBase

class ClimberInDB(ClimberBase, table=True):
    __tablename__="Climber"

    hashed_password: str
    disabled: bool = Field(default = True)

class Send(SendBase, table=True):
    __tablename__="Sends"

    send_date: date = Field(primary_key=True, default_factory=date.today)
    sequence: str = Field(primary_key=True, default_factory=lambda: str(uuid.uuid4()))