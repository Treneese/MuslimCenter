from config import db
from datetime import datetime
import json


class Program(db.Model):
    __tablename__ = "programs"

    id = db.Column(db.Integer, primary_key=True)

    title = db.Column(
        db.String(160),
        nullable=False
    )

    audience = db.Column(
        db.String(60),
        nullable=True
    )

    # ==========================================
    # LEGACY FIELD
    # ==========================================
    # Keep this temporarily so existing programs
    # do not break while we upgrade the frontend.
    schedule = db.Column(
        db.String(120),
        nullable=True
    )

    # ==========================================
    # RECURRING SCHEDULE
    # ==========================================

    # WEEKLY
    # EVERY_OTHER_WEEK
    # MONTHLY_NTH
    recurrence_type = db.Column(
        db.String(30),
        nullable=True
    )

    # Example:
    # ["MONDAY", "SATURDAY"]
    weekdays_json = db.Column(
        db.Text,
        nullable=True
    )

    # Used for:
    # First Saturday
    # Second Saturday
    # Third Saturday
    # Fourth Saturday
    # Last Saturday
    #
    # FIRST / SECOND / THIRD / FOURTH / LAST
    monthly_week = db.Column(
        db.String(20),
        nullable=True
    )

    monthly_patterns_json = db.Column(
    db.Text,
    nullable=True
)

    # Optional date where recurrence begins.
    recurrence_start_date = db.Column(
        db.String(10),
        nullable=True
    )

    # Optional date where recurrence stops.
    recurrence_end_date = db.Column(
        db.String(10),
        nullable=True
    )

    # ==========================================
    # PROGRAM TIME
    # ==========================================

    # CLOCK or PRAYER
    start_time_type = db.Column(
        db.String(20),
        nullable=True
    )

    # Example:
    # "18:30"
    # or
    # "MAGHRIB"
    start_time_value = db.Column(
        db.String(30),
        nullable=True
    )

    # CLOCK or PRAYER
    end_time_type = db.Column(
        db.String(20),
        nullable=True
    )

    end_time_value = db.Column(
        db.String(30),
        nullable=True
    )

    no_end_time = db.Column(
        db.Boolean,
        default=False,
        nullable=False
    )

    description = db.Column(
        db.Text,
        nullable=True
    )

    image_url = db.Column(
        db.String(500),
        nullable=True
    )

    created_at = db.Column(
        db.DateTime,
        default=datetime.utcnow,
        nullable=False
    )

    # ==========================================
    # WEEKDAY HELPERS
    # ==========================================

    def get_weekdays(self):
        if not self.weekdays_json:
            return []

        try:
            days = json.loads(
                self.weekdays_json
            )

            if isinstance(days, list):
                return days

        except (
            TypeError,
            json.JSONDecodeError
        ):
            pass

        return []

    def set_weekdays(self, weekdays):
        allowed = {
            "MONDAY",
            "TUESDAY",
            "WEDNESDAY",
            "THURSDAY",
            "FRIDAY",
            "SATURDAY",
            "SUNDAY",
        }

        clean_days = []

        for day in weekdays or []:
            if not day:
                continue

            normalized = (
                str(day)
                .strip()
                .upper()
            )

            if (
                normalized in allowed
                and normalized
                not in clean_days
            ):
                clean_days.append(
                    normalized
                )

        self.weekdays_json = (
            json.dumps(clean_days)
            if clean_days
            else None
        )

    def get_monthly_patterns(self):
        if not self.monthly_patterns_json:
            return []

        try:
            patterns = json.loads(
                self.monthly_patterns_json
            )

            if isinstance(patterns, list):
                return patterns

        except (
            TypeError,
            json.JSONDecodeError,
        ):
            pass

        return []


    def set_monthly_patterns(
        self,
        patterns,
    ):
        valid_weeks = {
            "FIRST",
            "SECOND",
            "THIRD",
            "FOURTH",
            "LAST",
        }

        valid_days = {
            "MONDAY",
            "TUESDAY",
            "WEDNESDAY",
            "THURSDAY",
            "FRIDAY",
            "SATURDAY",
            "SUNDAY",
        }

        clean_patterns = []

        for pattern in patterns or []:
            if not isinstance(
                pattern,
                dict,
            ):
                continue

            week = str(
                pattern.get("week") or ""
            ).strip().upper()

            weekday = str(
                pattern.get("weekday") or ""
            ).strip().upper()

            if (
                week in valid_weeks
                and weekday in valid_days
            ):
                item = {
                    "week": week,
                    "weekday": weekday,
                }

                if item not in clean_patterns:
                    clean_patterns.append(
                        item
                    )

        self.monthly_patterns_json = (
            json.dumps(clean_patterns)
            if clean_patterns
            else None
        )

    def to_dict(self):
        return {
            "id": self.id,
            "title": self.title,
            "audience": self.audience,

            # legacy
            "schedule": self.schedule,

            # recurrence
            "recurrence_type":
                self.recurrence_type,

            "weekdays":
                self.get_weekdays(),

            "monthly_week":
                self.monthly_week,

            "monthly_patterns":
                self.get_monthly_patterns(),

            "recurrence_start_date":
                self.recurrence_start_date,

            "recurrence_end_date":
                self.recurrence_end_date,

            # time
            "start_time_type":
                self.start_time_type,

            "start_time_value":
                self.start_time_value,

            "end_time_type":
                self.end_time_type,

            "end_time_value":
                self.end_time_value,

            "no_end_time":
                self.no_end_time,

            "description":
                self.description,

            "image_url":
                self.image_url,
        }