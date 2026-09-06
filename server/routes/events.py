from flask import Blueprint, request, jsonify
from config import db
from models.event import Event

events_bp = Blueprint("events", __name__)


def normalize_event_payload(data):
    dates = data.get("dates") or []

    if isinstance(dates, str):
        dates = [dates]

    return {
        "title": data.get("title"),
        "dates": dates,
        "start_time_type": data.get("start_time_type"),
        "start_time_value": data.get("start_time_value"),
        "end_time_type": data.get("end_time_type"),
        "end_time_value": data.get("end_time_value"),
        "all_day": bool(data.get("all_day", False)),
        "no_end_time": bool(data.get("no_end_time", False)),
        "category": data.get("category"),
        "description": data.get("description"),
        "image_url": data.get("image_url"),
        "is_special": bool(data.get("is_special", False)),
        "rsvp_enabled": bool(data.get("rsvp_enabled", False)),
        "rsvp_capacity": data.get("rsvp_capacity"),
        "location": data.get("location"),
    }


@events_bp.get("/api/events")
def get_events():
    events = Event.query.order_by(Event.id.desc()).all()
    return jsonify([event.to_dict() for event in events])


@events_bp.get("/api/events/<int:event_id>")
def get_event(event_id):
    event = Event.query.get_or_404(event_id)
    return jsonify(event.to_dict())


@events_bp.post("/api/events")
def create_event():
    data = request.get_json() or {}
    payload = normalize_event_payload(data)

    if not payload["title"]:
        return jsonify({"error": "Title is required"}), 400

    event = Event(
        title=payload["title"],
        start_time_type=payload["start_time_type"],
        start_time_value=payload["start_time_value"],
        end_time_type=payload["end_time_type"],
        end_time_value=payload["end_time_value"],
        all_day=payload["all_day"],
        no_end_time=payload["no_end_time"],
        category=payload["category"],
        description=payload["description"],
        image_url=payload["image_url"],
        is_special=payload["is_special"],
        rsvp_enabled=payload["rsvp_enabled"],
        rsvp_capacity=payload["rsvp_capacity"],
        location=payload["location"],
    )

    event.set_dates(payload["dates"])

    # Keep old `time` field useful while older frontend code still exists.
    if event.all_day:
        event.time = "All Day"

    elif event.start_time_value:
        event.time = event.start_time_value

    db.session.add(event)
    db.session.commit()

    return jsonify(event.to_dict()), 201


@events_bp.put("/api/events/<int:event_id>")
def update_event(event_id):
    event = Event.query.get_or_404(event_id)

    data = request.get_json() or {}
    payload = normalize_event_payload(data)

    if payload["title"]:
        event.title = payload["title"]

    event.set_dates(payload["dates"])

    event.start_time_type = payload["start_time_type"]
    event.start_time_value = payload["start_time_value"]
    event.end_time_type = payload["end_time_type"]
    event.end_time_value = payload["end_time_value"]

    event.all_day = payload["all_day"]
    event.no_end_time = payload["no_end_time"]

    event.category = payload["category"]
    event.description = payload["description"]
    event.image_url = payload["image_url"]
    event.is_special = payload["is_special"]
    event.rsvp_enabled = payload["rsvp_enabled"]
    event.rsvp_capacity = payload["rsvp_capacity"]
    event.location = payload["location"]

    if event.all_day:
        event.time = "All Day"
    elif event.start_time_value:
        event.time = event.start_time_value
    else:
        event.time = None

    db.session.commit()

    return jsonify(event.to_dict())


@events_bp.delete("/api/events/<int:event_id>")
def delete_event(event_id):
    event = Event.query.get_or_404(event_id)

    db.session.delete(event)
    db.session.commit()

    return jsonify({"message": "Event deleted"})