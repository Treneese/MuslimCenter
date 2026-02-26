from datetime import datetime
from config import db

class IqamahTimes(db.Model):
    __tablename__ = "iqamah_times"

    id = db.Column(db.Integer, primary_key=True)

    # if you later support multiple masjids/locations, you can add mosque_id or city here.
    fajr = db.Column(db.String(10), nullable=False, default="06:30")
    dhuhr = db.Column(db.String(10), nullable=False, default="13:30")
    asr = db.Column(db.String(10), nullable=False, default="16:30")
    maghrib = db.Column(db.String(10), nullable=False, default="18:30")
    isha = db.Column(db.String(10), nullable=False, default="20:00")

    updated_at = db.Column(db.DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)