from flask import Blueprint, jsonify, request
from config import db
from models.contact_message import ContactMessage
import os
import resend

contact_bp = Blueprint("contact", __name__)

resend.api_key = os.getenv("RESEND_API_KEY")


def send_contact_email(msg):
    resend.Emails.send({
        "from": "Muslim Center <onboarding@resend.dev>",
        "to": [os.getenv("CONTACT_RECEIVER_EMAIL", "treneesejohnson9012@gmail.com")],
        "subject": f"New Contact Message: {msg.subject or 'No Subject'}",
        "html": f"""
            <h2>New Contact Message</h2>
            <p><strong>Name:</strong> {msg.name or ''}</p>
            <p><strong>Email:</strong> {msg.email or ''}</p>
            <p><strong>Subject:</strong> {msg.subject or ''}</p>
            <p><strong>Message:</strong></p>
            <p>{msg.message}</p>
        """
    })


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

    send_contact_email(msg)
    print("RECEIVER:", os.getenv("CONTACT_RECEIVER_EMAIL"))

    return jsonify(msg.to_dict()), 201
