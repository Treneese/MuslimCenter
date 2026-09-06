from config import db
from datetime import datetime
from sqlalchemy.sql import func
import json


class Event(db.Model):
    __tablename__ = "events"

    id = db.Column(db.Integer, primary_key=True)

    title = db.Column(db.String(160), nullable=False)

    # OLD FIELDS
    # Keep these for backwards compatibility with existing events.
    day = db.Column(db.String(30), nullable=True)
    time = db.Column(db.String(30), nullable=True)

    # NEW DATE / TIME SYSTEM
    #
    # Stores one or more selected dates as JSON:
    # ["2026-09-12", "2026-09-13"]
    dates_json = db.Column(db.Text, nullable=True)

    # CLOCK or PRAYER
    start_time_type = db.Column(db.String(20), nullable=True)
    end_time_type = db.Column(db.String(20), nullable=True)

    # If type = CLOCK:
    # "17:30"
    #
    # If type = PRAYER:
    # "FAJR", "DHUHR", "ASR", "MAGHRIB", "ISHA"
    start_time_value = db.Column(db.String(30), nullable=True)
    end_time_value = db.Column(db.String(30), nullable=True)

    all_day = db.Column(db.Boolean, default=False, nullable=False)
    no_end_time = db.Column(db.Boolean, default=False, nullable=False)

    category = db.Column(db.String(60), nullable=True)
    description = db.Column(db.Text, nullable=True)

    image_url = db.Column(db.String(500), nullable=True)

    is_special = db.Column(db.Boolean, default=False, nullable=False)
    rsvp_enabled = db.Column(db.Boolean, default=False, nullable=False)
    rsvp_capacity = db.Column(db.Integer, nullable=True)

    location = db.Column(db.String(160), nullable=True)

    created_at = db.Column(
        db.DateTime,
        default=datetime.utcnow,
        nullable=False
    )

    rsvps = db.relationship(
        "EventRSVP",
        backref="event",
        cascade="all, delete-orphan"
    )

    def get_dates(self):
        """
        Return event dates as a normal Python list.

        New events use dates_json.
        Old events fall back to day.
        """
        if self.dates_json:
            try:
                dates = json.loads(self.dates_json)

                if isinstance(dates, list):
                    return dates
            except (TypeError, json.JSONDecodeError):
                pass

        if self.day:
            return [self.day]

        return []

    def set_dates(self, dates):
        """
        Save multiple selected dates.

        Also keeps `day` populated with the first date so older
        parts of the site do not immediately break.
        """
        clean_dates = []

        for date in dates or []:
            if date and date not in clean_dates:
                clean_dates.append(date)

        clean_dates.sort()

        self.dates_json = (
            json.dumps(clean_dates)
            if clean_dates
            else None
        )

        self.day = clean_dates[0] if clean_dates else None

    def rsvp_count(self):
        from models.event_rsvp import EventRSVP

        return (
            db.session.query(
                func.coalesce(
                    func.sum(EventRSVP.guests),
                    0
                )
            )
            .filter(EventRSVP.event_id == self.id)
            .scalar()
        ) or 0

    def to_dict(self, include_rsvp_count=True):
        data = {
            "id": self.id,
            "title": self.title,

            # backwards-compatible fields
            "day": self.day,
            "time": self.time,

            # new scheduling fields
            "dates": self.get_dates(),
            "start_time_type": self.start_time_type,
            "start_time_value": self.start_time_value,
            "end_time_type": self.end_time_type,
            "end_time_value": self.end_time_value,
            "all_day": self.all_day,
            "no_end_time": self.no_end_time,

            "category": self.category,
            "description": self.description,
            "image_url": self.image_url,

            "is_special": self.is_special,
            "rsvp_enabled": self.rsvp_enabled,
            "rsvp_capacity": self.rsvp_capacity,

            "location": self.location,

            "created_at": (
                self.created_at.isoformat()
                if self.created_at
                else None
            ),
        }

        if include_rsvp_count:
            data["rsvp_count"] = self.rsvp_count()

        return data