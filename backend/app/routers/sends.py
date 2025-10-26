from fastapi import APIRouter
from ..databaseConnection import SessionDep
from ..models import Send
from ..schemas import SendBase

router = APIRouter()

@router.post("/sends", response_model=SendBase)
def create_send(send: Send, session: SessionDep) -> any:
    session.add(Send)
    session.commit()
    session.refresh(send)
    return send