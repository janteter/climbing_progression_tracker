from fastapi import APIRouter, HTTPException
from ..databaseConnection import SessionDep
from ..models import SendBase, SendListItem
from ..schemas import Send 
from datetime import date
from sqlalchemy import select, delete


router = APIRouter()

@router.post("/sends", response_model=SendBase)
def create_send(send: Send, session: SessionDep) -> any:
    session.add(send)
    session.commit()
    session.refresh(send)
    return send

@router.delete("/sends/{sequence}")
def delete_send(sequence: str, session: SessionDep):
    stmt = delete(Send).where(Send.sequence == sequence)
    session.exec(stmt)
    session.commit()

@router.get("/prev_sends", response_model=list[SendListItem], status_code=200)
def prev_sends_by_date(target_date: date, session: SessionDep):
    sends = session.exec(select(Send).where(Send.send_date == target_date)).scalars().all()
    if not sends:
        raise HTTPException(status_code=404, detail="No sends found for date inputted")
    return sends
