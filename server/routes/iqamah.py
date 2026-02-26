from flask import Blueprint, jsonify, request
from config import db
from models.iqamah import IqamahTimes
import os

iqamah_bp = Blueprint("iqamah_bp", __name__)

def require_admin(req):
    admin_key = os.getenv("ADMIN_KEY", "")
    provided = req.headers.get("x-admin-key", "")
    return admin_key and provided == admin_key

@iqamah_bp.get("/api/iqamah")
def get_iqamah():
    row = IqamahTimes.query.first()
    if not row:
        row = IqamahTimes()
        db.session.add(row)
        db.session.commit()

    return jsonify({
        "fajr": row.fajr,
        "dhuhr": row.dhuhr,
        "asr": row.asr,
        "maghrib": row.maghrib,
        "isha": row.isha,
        "updated_at": row.updated_at.isoformat() if row.updated_at else None,
    })

@iqamah_bp.put("/api/iqamah")
def update_iqamah():
    if not require_admin(request):
        return jsonify({"error": "Unauthorized"}), 401

    data = request.get_json() or {}

    row = IqamahTimes.query.first()
    if not row:
        row = IqamahTimes()
        db.session.add(row)

    # Only update known keys
    for key in ["fajr", "dhuhr", "asr", "maghrib", "isha"]:
        if key in data and data[key]:
            setattr(row, key, str(data[key]).strip())

    db.session.commit()

    return jsonify({"ok": True})