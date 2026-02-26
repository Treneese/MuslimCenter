from config import db

class Program(db.Model):
    __tablename__ = "programs"

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(160), nullable=False)
    audience = db.Column(db.String(60), nullable=True)   # Youth / Adults / Family
    schedule = db.Column(db.String(120), nullable=True)  # "Saturdays 10:00 AM"
    description = db.Column(db.Text, nullable=True)

    def to_dict(self):
        return {
            "id": self.id,
            "title": self.title,
            "audience": self.audience,
            "schedule": self.schedule,
            "description": self.description,
        }