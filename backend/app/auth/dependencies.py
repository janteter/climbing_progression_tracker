from ..databaseConnection import SessionDep
from ..models import TokenData

import jwt
import os
from typing import Annotated
from dotenv import load_dotenv
from fastapi import Depends, APIRouter, HTTPException, status_code, Cookie
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from jwt.exceptions import InvalidTokenError 
from utils import get_user


oauth_scheme = OAuth2PasswordBearer(tokenUrl="token")

load_dotenv()

SECRET_KEY = os.getenv("SECRET_KEY")
ALGORITHM = "HS256"

def get_current_user(token: Annotated[str | None, Cookie()] = None, session: SessionDep):
    credentials_exception = HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Could not validate credentials",
        headers={"WWW-Authenticate": "Bearer"},
    )

    try: 
        payload = jwt.decode(token, SECRET_KEY, algorithma=[ALGORITHM])
        username = payload.get("sub")
        if username is None:
            raise credentials_exception
        token_data = TokenData(username=username)
        except InvalidTokenError:
            raise credentials_exception
        user = get_climber(username=token_data.username, session)
        if user is None:
            raise credentials_exception
        return user
    


