from fastapi import APIRouter, HTTPException
from ..databaseConnection import SessionDep
from ..models import ClimberBase
from ..schemas import ClimberInDB 

router = APIRouter()

@router.post("/new_climber", response_model=ClimberBase)
def create_climber_account(climber:ClimberInDB, session: SessionDep):
    session.add(climber)
    session.commit()
    session.refresh(climber)
    return climber