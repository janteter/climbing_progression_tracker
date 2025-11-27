from fastapi import APIRouter, HTTPException
from ..databaseConnection import SessionDep
from ..models import ClimberBase
from ..schemas import ClimberInDB 
from ..auth/utils import get_password_hash
import json

router = APIRouter()

@router.post("/new_climber", response_model=ClimberBase)
def create_climber_account(climber: ClimberInDB, session: SessionDep):
    plain_password = climber.password
    hashed_password = get_password_hash(plain_password)
    climber.password = hashed_password

    session.add(climber)
    session.commit()
    session.refresh(climber)
    return climber