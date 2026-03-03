from config import db
from datetime import datetime
from sqlalchemy.sql import func

class Event(db.Model):
    __tablename__ = "events"

    id = db.Column(db.Integer, primary_key=True)

    title = db.Column(db.String(160), nullable=False)
    day = db.Column(db.String(30), nullable=True)
    time = db.Column(db.String(30), nullable=True)
    category = db.Column(db.String(60), nullable=True)  # Weekly / Youth / Program / Special
    description = db.Column(db.Text, nullable=True)

    image_url = db.Column(db.String(500), nullable=True)

    is_special = db.Column(db.Boolean, default=False, nullable=False)
    rsvp_enabled = db.Column(db.Boolean, default=False, nullable=False)
    rsvp_capacity = db.Column(db.Integer, nullable=True)
    location = db.Column(db.String(160), nullable=True)

    created_at = db.Column(db.DateTime, default=datetime.utcnow, nullable=False)

    rsvps = db.relationship("EventRSVP", backref="event", cascade="all, delete-orphan")

    def rsvp_count(self):
        # SQL count (fast, avoids loading all RSVPs)
        from models.event_rsvp import EventRSVP
        return (
            db.session.query(func.coalesce(func.sum(EventRSVP.guests), 0))
            .filter(EventRSVP.event_id == self.id)
            .scalar()
        ) or 0

    def to_dict(self, include_rsvp_count=True):
        data = {
            "id": self.id,
            "title": self.title,
            "day": self.day,
            "time": self.time,
            "category": self.category,
            "description": self.description,
            "image_url": self.image_url,
            "is_special": self.is_special,
            "rsvp_enabled": self.rsvp_enabled,
            "rsvp_capacity": self.rsvp_capacity,
            "location": self.location,
            "created_at": self.created_at.isoformat() if self.created_at else None,
        }
        if include_rsvp_count:
            data["rsvp_count"] = self.rsvp_count()
        return data