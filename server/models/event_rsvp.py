from config import db
from datetime import datetime

class EventRSVP(db.Model):
    __tablename__ = "event_rsvps"

    id = db.Column(db.Integer, primary_key=True)
    event_id = db.Column(db.Integer, db.ForeignKey("events.id"), nullable=False)

    name = db.Column(db.String(120), nullable=False)
    email = db.Column(db.String(160), nullable=True)
    phone = db.Column(db.String(40), nullable=True)

    guests = db.Column(db.Integer, default=1, nullable=False)
    note = db.Column(db.Text, nullable=True)

    created_at = db.Column(db.DateTime, default=datetime.utcnow, nullable=False)

    def to_dict(self):
        return {
            "id": self.id,
            "event_id": self.event_id,
            "name": self.name,
            "email": self.email,
            "phone": self.phone,
            "guests": self.guests,
            "note": self.note,
            "created_at": self.created_at.isoformat() if self.created_at else None,
        }