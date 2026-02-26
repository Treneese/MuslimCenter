# server/routes/prayer_times.py
from flask import Blueprint, jsonify, request
import requests
from datetime import date
from models.iqamah import IqamahTimes
from config import db  # <-- important

prayer_times_bp = Blueprint("prayer_times", __name__)

_CACHE = {}

@prayer_times_bp.get("/api/prayer-times")
def prayer_times():

    city = request.args.get("city", "Detroit")
    country = request.args.get("country", "United States")
    method = request.args.get("method", "2")

    today = date.today().isoformat()
    cache_key = f"{today}:{city}:{country}:{method}"

    # ✅ Check cache
    cached = _CACHE.get(cache_key)
    if cached and cached.get("expires") == today:
        return jsonify({"ok": True, "source": "cache", **cached["data"]})

    url = "https://api.aladhan.com/v1/timingsByCity"
    params = {"city": city, "country": country, "method": method}

    try:
        resp = requests.get(url, params=params, timeout=10)
        resp.raise_for_status()
        payload = resp.json()

        data = payload.get("data", {})
        timings = data.get("timings", {})
        meta = data.get("meta", {})

        adhan_timings = {
            "Fajr": timings.get("Fajr"),
            "Dhuhr": timings.get("Dhuhr"),
            "Asr": timings.get("Asr"),
            "Maghrib": timings.get("Maghrib"),
            "Isha": timings.get("Isha"),
        }

        tz = meta.get("timezone")

        # ✅ Get iqamah from DB
        row = IqamahTimes.query.first()
        if not row:
            row = IqamahTimes()
            db.session.add(row)
            db.session.commit()

        merged = {
            "Fajr": {"adhan": adhan_timings["Fajr"], "iqamah": row.fajr},
            "Dhuhr": {"adhan": adhan_timings["Dhuhr"], "iqamah": row.dhuhr},
            "Asr": {"adhan": adhan_timings["Asr"], "iqamah": row.asr},
            "Maghrib": {"adhan": adhan_timings["Maghrib"], "iqamah": row.maghrib},
            "Isha": {"adhan": adhan_timings["Isha"], "iqamah": row.isha},
        }

        final_data = {
    "city": city,
    "country": country,
    "meta": {"timezone": tz},
    "timings": merged,
}
        _CACHE[cache_key] = {"data": final_data, "expires": today}
        return jsonify({"ok": True, "source": "aladhan", **final_data})
    except requests.RequestException as e:
        return jsonify({"ok": False, "error": str(e)}), 502