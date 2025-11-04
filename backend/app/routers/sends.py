from fastapi import APIRouter
from ..databaseConnection import SessionDep
from ..models import Send
from ..schemas import SendBase, SendListItem
from datetime import date
from sqlalchemy import select


router = APIRouter()

@router.post("/sends", response_model=SendBase)
def create_send(send: Send, session: SessionDep) -> any:
    session.add(send)
    session.commit()
    session.refresh(send)
    return send

@router.get("/prev_sends", response_model=list[SendListItem])
def prev_sends_by_date(target_date: date, session: SessionDep):
    sends = session.exec(select(Send).where(Send.send_date == target_date)).scalars().all()
    return sends