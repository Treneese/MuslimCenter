from app import app
from config import db
from models import IqamahTimes


def seed_iqamah():
    existing = IqamahTimes.query.first()

    if not existing:
        db.session.add(
            IqamahTimes(
                fajr="06:30",
                dhuhr="13:30",
                asr="16:30",
                maghrib="18:30",
                isha="20:00",
            )
        )


with app.app_context():
    db.create_all()

    seed_iqamah()

    db.session.commit()

    print(
        "✅ Database initialized without "
        "overwriting existing data."
    )