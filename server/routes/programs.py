from flask import Blueprint, jsonify, request
from config import db
from models.program import Program
from utils.admin import require_admin

programs_bp = Blueprint("programs", __name__)


VALID_RECURRENCE_TYPES = {
    "WEEKLY",
    "EVERY_OTHER_WEEK",
    "MONTHLY_NTH",
}

VALID_TIME_TYPES = {
    "CLOCK",
    "PRAYER",
}

VALID_PRAYERS = {
    "FAJR",
    "DHUHR",
    "ASR",
    "MAGHRIB",
    "ISHA",
}


def parse_bool(value, default=False):
    if value is None:
        return default

    if isinstance(value, bool):
        return value

    if isinstance(value, (int, float)):
        return bool(value)

    if isinstance(value, str):
        return value.strip().lower() in {
            "1",
            "true",
            "yes",
            "y",
            "on",
        }

    return default


def validate_time(
    type_value,
    time_value,
    field_name,
):
    if not time_value:
        return None

    if type_value not in VALID_TIME_TYPES:
        return (
            f"{field_name}_time_type must be "
            "CLOCK or PRAYER"
        )

    if (
        type_value == "PRAYER"
        and time_value not in VALID_PRAYERS
    ):
        return (
            f"{field_name}_time_value must be one of "
            "FAJR, DHUHR, ASR, MAGHRIB, ISHA"
        )

    return None


@programs_bp.get("/api/programs")
def get_programs():
    rows = Program.query.order_by(
        Program.id.desc()
    ).all()

    return jsonify([
        p.to_dict()
        for p in rows
    ])


@programs_bp.get("/api/programs/<int:program_id>")
def get_program(program_id):
    p = Program.query.get_or_404(
        program_id
    )

    return jsonify(
        p.to_dict()
    )


@programs_bp.post("/api/programs")
@require_admin
def create_program():
    data = request.get_json() or {}

    title = (
        data.get("title") or ""
    ).strip()

    if not title:
        return jsonify({
            "error": "title is required"
        }), 400

    recurrence_type = data.get(
        "recurrence_type"
    )

    weekdays = data.get(
        "weekdays"
    ) or []

    monthly_patterns = data.get(
        "monthly_patterns"
    ) or []

    start_time_type = data.get(
        "start_time_type"
    )

    start_time_value = data.get(
        "start_time_value"
    )

    end_time_type = data.get(
        "end_time_type"
    )

    end_time_value = data.get(
        "end_time_value"
    )

    no_end_time = parse_bool(
        data.get("no_end_time"),
        False,
    )

    if (
        recurrence_type
        and recurrence_type
        not in VALID_RECURRENCE_TYPES
    ):
        return jsonify({
            "error": "invalid recurrence_type"
        }), 400

    if (
        recurrence_type
        in {
            "WEEKLY",
            "EVERY_OTHER_WEEK",
        }
        and not weekdays
    ):
        return jsonify({
            "error":
                "at least one weekday is required"
        }), 400

    if (
        recurrence_type == "MONTHLY_NTH"
        and not monthly_patterns
    ):
        return jsonify({
            "error":
                "at least one monthly pattern is required"
        }), 400

    start_error = validate_time(
        start_time_type,
        start_time_value,
        "start",
    )

    if start_error:
        return jsonify({
            "error": start_error
        }), 400

    if not no_end_time:
        end_error = validate_time(
            end_time_type,
            end_time_value,
            "end",
        )

        if end_error:
            return jsonify({
                "error": end_error
            }), 400

    p = Program(
        title=title,

        audience=data.get(
            "audience"
        ),

        schedule=data.get(
            "schedule"
        ),

        recurrence_type=
            recurrence_type,

        monthly_week=
            data.get(
                "monthly_week"
            ),

        recurrence_start_date=
            data.get(
                "recurrence_start_date"
            ),

        recurrence_end_date=
            data.get(
                "recurrence_end_date"
            ),

        start_time_type=
            start_time_type,

        start_time_value=
            start_time_value,

        end_time_type=
            None
            if no_end_time
            else end_time_type,

        end_time_value=
            None
            if no_end_time
            else end_time_value,

        no_end_time=
            no_end_time,

        description=
            data.get(
                "description"
            ),

        image_url=
            data.get(
                "image_url"
            ),
    )

    p.set_weekdays(
        weekdays
    )

    p.set_monthly_patterns(
        monthly_patterns
    )

    db.session.add(p)
    db.session.commit()

    return jsonify(
        p.to_dict()
    ), 201


@programs_bp.put("/api/programs/<int:program_id>")
@require_admin
def update_program(program_id):
    p = Program.query.get_or_404(
        program_id
    )

    data = request.get_json() or {}

    if "title" in data:
        p.title = (
            data.get("title") or ""
        ).strip()

        if not p.title:
            return jsonify({
                "error": "title is required"
            }), 400

    if "audience" in data:
        p.audience = data.get(
            "audience"
        )

    if "schedule" in data:
        p.schedule = data.get(
            "schedule"
        )

    if "description" in data:
        p.description = data.get(
            "description"
        )

    if "image_url" in data:
        p.image_url = data.get(
            "image_url"
        )

    if "recurrence_type" in data:
        recurrence_type = data.get(
            "recurrence_type"
        )

        if (
            recurrence_type
            and recurrence_type
            not in VALID_RECURRENCE_TYPES
        ):
            return jsonify({
                "error":
                    "invalid recurrence_type"
            }), 400

        p.recurrence_type = (
            recurrence_type
        )

    if "weekdays" in data:
        weekdays = data.get(
            "weekdays"
        ) or []

        if (
            p.recurrence_type
            in {
                "WEEKLY",
                "EVERY_OTHER_WEEK",
            }
            and not weekdays
        ):
            return jsonify({
                "error":
                    "at least one weekday is required"
            }), 400

        p.set_weekdays(
            weekdays
        )

    if "monthly_patterns" in data:
        monthly_patterns = data.get(
            "monthly_patterns"
        ) or []

        if (
            p.recurrence_type
            == "MONTHLY_NTH"
            and not monthly_patterns
        ):
            return jsonify({
                "error":
                    "at least one monthly pattern is required"
            }), 400

        p.set_monthly_patterns(
            monthly_patterns
        )

    if "monthly_week" in data:
        p.monthly_week = data.get(
            "monthly_week"
        )

    if "recurrence_start_date" in data:
        p.recurrence_start_date = (
            data.get(
                "recurrence_start_date"
            )
        )

    if "recurrence_end_date" in data:
        p.recurrence_end_date = (
            data.get(
                "recurrence_end_date"
            )
        )

    if "start_time_type" in data:
        p.start_time_type = (
            data.get(
                "start_time_type"
            )
        )

    if "start_time_value" in data:
        p.start_time_value = (
            data.get(
                "start_time_value"
            )
        )

    if "no_end_time" in data:
        p.no_end_time = parse_bool(
            data.get(
                "no_end_time"
            ),
            p.no_end_time,
        )

    if "end_time_type" in data:
        p.end_time_type = (
            data.get(
                "end_time_type"
            )
        )

    if "end_time_value" in data:
        p.end_time_value = (
            data.get(
                "end_time_value"
            )
        )

    start_error = validate_time(
        p.start_time_type,
        p.start_time_value,
        "start",
    )

    if start_error:
        return jsonify({
            "error": start_error
        }), 400

    if p.no_end_time:
        p.end_time_type = None
        p.end_time_value = None

    else:
        end_error = validate_time(
            p.end_time_type,
            p.end_time_value,
            "end",
        )

        if end_error:
            return jsonify({
                "error": end_error
            }), 400

    db.session.commit()

    return jsonify(
        p.to_dict()
    )


@programs_bp.delete("/api/programs/<int:program_id>")
@require_admin
def delete_program(program_id):
    p = Program.query.get_or_404(
        program_id
    )

    db.session.delete(p)
    db.session.commit()

    return jsonify({
        "deleted": True,
        "id": program_id,
    })