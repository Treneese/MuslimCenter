from config import db
from datetime import datetime

class Program(db.Model):
    __tablename__ = "programs"

    id = db.Column(db.Integer, primary_key=True)

    title = db.Column(db.String(160), nullable=False)

    # ✅ match your routes
    audience = db.Column(db.String(60), nullable=True)   # Youth / Adults / Sisters / Family
    schedule = db.Column(db.String(120), nullable=True)  # "Tuesdays 6:00 PM"
    description = db.Column(db.Text, nullable=True)

    # ✅ NEW: image support
    image_url = db.Column(db.String(500), nullable=True)

    created_at = db.Column(db.DateTime, default=datetime.utcnow, nullable=False)

    def to_dict(self):
        return {
            "id": self.id,
            "title": self.title,
            "audience": self.audience,
            "schedule": self.schedule,
            "description": self.description,
            "image_url": self.image_url,
        }