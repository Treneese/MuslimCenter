from config import db

class PrayerTime(db.Model):
    __tablename__ = "prayer_times"

    id = db.Column(db.Integer, primary_key=True)
    date = db.Column(db.String(20), nullable=False)      # "2026-02-24" (store as string for MVP)
    fajr = db.Column(db.String(10), nullable=True)
    dhuhr = db.Column(db.String(10), nullable=True)
    asr = db.Column(db.String(10), nullable=True)
    maghrib = db.Column(db.String(10), nullable=True)
    isha = db.Column(db.String(10), nullable=True)

    def to_dict(self):
        return {
            "id": self.id,
            "date": self.date,
            "fajr": self.fajr,
            "dhuhr": self.dhuhr,
            "asr": self.asr,
            "maghrib": self.maghrib,
            "isha": self.isha,
        }