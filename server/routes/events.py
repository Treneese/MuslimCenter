from flask import Blueprint, jsonify, request
from config import db
from models.event import Event
from utils.admin import require_admin

events_bp = Blueprint("events", __name__)

def parse_bool(v, default=False):
    if v is None:
        return default
    if isinstance(v, bool):
        return v
    if isinstance(v, (int, float)):
        return bool(v)
    if isinstance(v, str):
        return v.strip().lower() in ("1", "true", "yes", "y", "on")
    return default

def parse_int(v, default=None):
    if v is None or v == "":
        return default
    try:
        return int(v)
    except:
        return default

@events_bp.get("/api/events")
def get_events():
    events = Event.query.order_by(Event.id.desc()).all()
    return jsonify([e.to_dict() for e in events])

@events_bp.get("/api/events/<int:event_id>")
def get_event(event_id):
    e = Event.query.get_or_404(event_id)
    return jsonify(e.to_dict())

@events_bp.post("/api/events")
@require_admin
def create_event():
    data = request.get_json() or {}

    title = (data.get("title") or "").strip()
    if not title:
        return jsonify({"error": "title is required"}), 400

    e = Event(
        title=title,
        day=data.get("day"),
        time=data.get("time"),
        category=data.get("category"),
        description=data.get("description"),
        image_url=data.get("image_url"),
        is_special=parse_bool(data.get("is_special"), False),
        rsvp_enabled=parse_bool(data.get("rsvp_enabled"), False),
        rsvp_capacity=parse_int(data.get("rsvp_capacity"), None),
        location=data.get("location"),
    )

    db.session.add(e)
    db.session.commit()
    return jsonify(e.to_dict()), 201

@events_bp.put("/api/events/<int:event_id>")
@require_admin
def update_event(event_id):
    e = Event.query.get_or_404(event_id)
    data = request.get_json() or {}

    if "title" in data:
        e.title = (data.get("title") or "").strip()
        if not e.title:
            return jsonify({"error": "title is required"}), 400

    if "day" in data: e.day = data.get("day")
    if "time" in data: e.time = data.get("time")
    if "category" in data: e.category = data.get("category")
    if "description" in data: e.description = data.get("description")
    if "image_url" in data: e.image_url = data.get("image_url")
    if "location" in data: e.location = data.get("location")

    if "is_special" in data:
        e.is_special = parse_bool(data.get("is_special"), e.is_special)

    if "rsvp_enabled" in data:
        e.rsvp_enabled = parse_bool(data.get("rsvp_enabled"), e.rsvp_enabled)

    if "rsvp_capacity" in data:
        e.rsvp_capacity = parse_int(data.get("rsvp_capacity"), None)

    db.session.commit()
    return jsonify(e.to_dict())

@events_bp.delete("/api/events/<int:event_id>")
@require_admin
def delete_event(event_id):
    e = Event.query.get_or_404(event_id)
    db.session.delete(e)
    db.session.commit()
    return jsonify({"deleted": True, "id": event_id})