from flask import Blueprint, jsonify, request
from config import db
from models.event import Event
from utils.admin import require_admin

events_bp = Blueprint("events", __name__)

@events_bp.get("/events")
def get_events():
    events = Event.query.order_by(Event.id.desc()).all()
    return jsonify([e.to_dict() for e in events])

@events_bp.get("/events/<int:event_id>")
def get_event(event_id):
    e = Event.query.get_or_404(event_id)
    return jsonify(e.to_dict())

@events_bp.post("/events")
@require_admin
def create_event():
    data = request.get_json() or {}
    e = Event(
        title=(data.get("title") or "").strip(),
        day=data.get("day"),
        time=data.get("time"),
        category=data.get("category"),
        description=data.get("description"),
    )
    if not e.title:
        return jsonify({"error": "title is required"}), 400

    db.session.add(e)
    db.session.commit()
    return jsonify(e.to_dict()), 201

@events_bp.put("/events/<int:event_id>")
@require_admin
def update_event(event_id):
    e = Event.query.get_or_404(event_id)
    data = request.get_json() or {}

    if "title" in data:
        e.title = (data.get("title") or "").strip()
        if not e.title:
            return jsonify({"error": "title is required"}), 400

    for field in ["day", "time", "category", "description"]:
        if field in data:
            setattr(e, field, data.get(field))

    db.session.commit()
    return jsonify(e.to_dict())

@events_bp.delete("/events/<int:event_id>")
@require_admin
def delete_event(event_id):
    e = Event.query.get_or_404(event_id)
    db.session.delete(e)
    db.session.commit()
    return jsonify({"deleted": True, "id": event_id})