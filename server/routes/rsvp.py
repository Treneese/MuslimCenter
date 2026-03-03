from flask import Blueprint, jsonify, request
from config import db
from models.event import Event
from models.event_rsvp import EventRSVP
from utils.admin import require_admin
from sqlalchemy.sql import func

rsvp_bp = Blueprint("rsvp", __name__)

def parse_int(v, default=1):
    if v is None or v == "":
        return default
    try:
        return int(v)
    except:
        return default

@rsvp_bp.post("/api/events/<int:event_id>/rsvp")
def create_rsvp(event_id):
    event = Event.query.get_or_404(event_id)

    if not event.is_special or not event.rsvp_enabled:
        return jsonify({"error": "RSVP is not enabled for this event"}), 400

    data = request.get_json() or {}

    name = (data.get("name") or "").strip()
    if not name:
        return jsonify({"error": "name is required"}), 400

    guests = parse_int(data.get("guests"), 1)
    if guests < 1:
        guests = 1

    # capacity check (sum guests)
    if event.rsvp_capacity is not None:
        current = (
            db.session.query(func.coalesce(func.sum(EventRSVP.guests), 0))
            .filter(EventRSVP.event_id == event.id)
            .scalar()
        ) or 0

        if current + guests > event.rsvp_capacity:
            return jsonify({"error": "Event RSVP is full"}), 400

    rsvp = EventRSVP(
        event_id=event.id,
        name=name,
        email=(data.get("email") or "").strip() or None,
        phone=(data.get("phone") or "").strip() or None,
        guests=guests,
        note=(data.get("note") or None),
    )

    db.session.add(rsvp)
    db.session.commit()
    return jsonify({"ok": True, "rsvp": rsvp.to_dict()}), 201


@rsvp_bp.get("/api/admin/rsvps")
@require_admin
def list_rsvps():
    event_id = request.args.get("event_id")
    q = EventRSVP.query
    if event_id:
        q = q.filter(EventRSVP.event_id == int(event_id))
    rows = q.order_by(EventRSVP.id.desc()).all()
    return jsonify([r.to_dict() for r in rows])


@rsvp_bp.delete("/api/admin/rsvps/<int:rsvp_id>")
@require_admin
def delete_rsvp(rsvp_id):
    r = EventRSVP.query.get_or_404(rsvp_id)
    db.session.delete(r)
    db.session.commit()
    return jsonify({"deleted": True, "id": rsvp_id})