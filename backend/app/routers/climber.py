from ..databaseConnection import SessionDep
from ..models import ClimberBase
from ..schemas import ClimberInDB 
from ..auth.utils import get_password_hash, create_access_tokens, authenticate_climber
from ..models import Token
from ..auth.dependencies import get_current_climber

from fastapi import APIRouter, HTTPException, Depends, Response
import json
from typing import Annotated
from fastapi.security import OAuth2PasswordRequestForm
from datetime import timedelta

router = APIRouter()

ACCESS_TOKEN_EXPIRE_MINUTES = 30

@router.post("/new_climber", response_model=ClimberBase)
def create_climber_account(climber: ClimberInDB, session: SessionDep):
    plain_password = climber.password
    hashed_password = get_password_hash(plain_password)
    climber.password = hashed_password

    session.add(climber)
    session.commit()
    session.refresh(climber)
    return climber


@router.post("/token")
async def login_for_access_token(form_data: Annotated[OAuth2PasswordRequestForm, Depends()], response: Response, session: SessionDep, status_code=201):
    print(type(form_data))
    climber = authenticate_climber(form_data.username, form_data.password, session)
    if not climber:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect username or password",
            headers={"WWW-Authenticate": "Bearer"},
        )
    access_token_expires = timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    access_token = create_access_tokens(
        data={"sub": climber.username}, expires_delta=access_token_expires
    )
    
    response.set_cookie(key="token", value=access_token, httponly=True, secure=False, samesite='lax')
    
    return {"message": "Successful login"}

@router.get("/status")
async def status_check(climber_status = Depends(get_current_climber)):
    return climber_status