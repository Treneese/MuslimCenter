from app import app
from config import db
from models import Event, Program, PrayerTime, IqamahTimes

SEED_EVENTS = [
    Event(title="Jumu’ah Khutbah", day="Friday", time="1:30 PM", category="Weekly"),
    Event(title="Weekend School", day="Saturday", time="10:00 AM", category="Youth"),
    Event(title="Sisters’ Qur’an Circle", day="Tuesday", time="6:00 PM", category="Program"),
]

SEED_PROGRAMS = [
    Program(title="Weekend School", audience="Youth", schedule="Saturdays 10:00 AM", description="Islamic learning and community."),
    Program(title="Qur'an Circle", audience="Adults", schedule="Tuesdays 6:00 PM", description="Weekly group recitation and reflection."),
]

SEED_PRAYER_TIMES = [
    PrayerTime(date="2026-02-24", fajr="5:48 AM", dhuhr="1:13 PM", asr="4:32 PM", maghrib="6:05 PM", isha="7:28 PM")
]
def seed_iqamah():
    existing = IqamahTimes.query.first()
    if not existing:
        db.session.add(IqamahTimes(
            fajr="06:30",
            dhuhr="13:30",
            asr="16:30",
            maghrib="18:30",
            isha="20:00"
        ))

with app.app_context():
    db.create_all()

    # wipe + reseed (MVP style)
    Event.query.delete()
    Program.query.delete()
    PrayerTime.query.delete()

    db.session.add_all(SEED_EVENTS)
    db.session.add_all(SEED_PROGRAMS)
    db.session.add_all(SEED_PRAYER_TIMES)

    db.session.commit()
    print("✅ Seed complete.")