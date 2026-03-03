from flask import Blueprint, jsonify, request
from config import db
from models.contact_message import ContactMessage

contact_bp = Blueprint("contact", __name__)

@contact_bp.post("/api/contact")
def create_contact():
    data = request.get_json() or {}
    msg_text = (data.get("message") or "").strip()
    if not msg_text:
        return jsonify({"error": "message is required"}), 400

    msg = ContactMessage(
        name=data.get("name"),
        email=data.get("email"),
        subject=data.get("subject"),
        message=msg_text,
    )
    db.session.add(msg)
    db.session.commit()
    return jsonify(msg.to_dict()), 201