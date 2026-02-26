from config import db

class Event(db.Model):
    __tablename__ = "events"

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(160), nullable=False)
    day = db.Column(db.String(30), nullable=True)
    time = db.Column(db.String(30), nullable=True)
    category = db.Column(db.String(60), nullable=True)   # Weekly / Youth / Program
    description = db.Column(db.Text, nullable=True)

    def to_dict(self):
        return {
            "id": self.id,
            "title": self.title,
            "day": self.day,
            "time": self.time,
            "category": self.category,
            "description": self.description,
        }