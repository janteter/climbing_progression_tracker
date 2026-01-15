from ..databaseConnection import SessionDep
from ..models import SendBase, SendListItem
from ..schemas import Send 
from ..auth.dependencies import get_current_climber

from datetime import datetime
from fastapi import APIRouter, HTTPException, Cookie
from datetime import date
from sqlalchemy import select, delete
from typing import Annotated


router = APIRouter()

@router.post("/sends", response_model=SendBase, status_code=200)
def create_send(send: Send, session: SessionDep, token: Annotated[str | None, Cookie()] = None) -> any:
    climber = get_current_climber(session, token)
    send.climberID = climber.climberID
    try:
        session.add(send)
        session.commit()
        session.refresh(send)
    except:
        raise HTTPException(status_code=422, detail="Incorrect Input Format(s)")
    return send

@router.delete("/sends/{sequence}")
def delete_send(sequence: str, session: SessionDep, token: Annotated[str | None, Cookie()] = None):
    climber = get_current_climber(session, token)
    climberID = climber.climberID
    stmt = delete(Send).where(Send.sequence == sequence and Send.climberID == climberID)
    session.exec(stmt)
    session.commit()

@router.patch("/sends")
def update_send(new_send_data: SendListItem, session: SessionDep, token: Annotated[str | None, Cookie()] = None):
    print(new_send_data)
    climber = get_current_climber(session, token)
    climberID = climber.climberID
    stmt = select(Send).where(Send.sequence == sendData.sequence and Send.climberID == climberID)
    results = session.exec(stmt)
    current_send_data = results.one()
    current_send_data.style = new_send_data.style

    session.add(current_send_data)
    session.commit()
    session.refresh(current_send_data)

@router.get("/prev_sends", response_model=list[SendListItem], status_code=200)
def prev_sends_by_date(target_date: date, session: SessionDep, token: Annotated[str | None, Cookie()] = None):
    climber = get_current_climber(session, token)
    climberID = climber.climberID
    sends = session.exec(select(Send).where(Send.send_date == target_date and Send.climberID == climberID)).scalars().all()
    if not sends:
        raise HTTPException(status_code=404, detail="No sends found for date inputted")
    return sends
