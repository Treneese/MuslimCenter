# server/routes/uploads.py
import os
import uuid
from flask import Blueprint, request, jsonify, current_app
from werkzeug.utils import secure_filename
from utils.admin import require_admin

uploads_bp = Blueprint("uploads", __name__)

ALLOWED_EXTS = {"png", "jpg", "jpeg", "webp", "gif"}

def allowed(filename: str) -> bool:
    ext = (filename.rsplit(".", 1)[-1] or "").lower()
    return ext in ALLOWED_EXTS

@uploads_bp.post("/api/admin/upload")
@require_admin
def upload_file():
    if "file" not in request.files:
        return jsonify({"error": "No file field sent (expected 'file')"}), 400

    f = request.files["file"]
    if not f or f.filename == "":
        return jsonify({"error": "No file selected"}), 400

    filename = secure_filename(f.filename)
    if not allowed(filename):
        return jsonify({"error": "File type not allowed"}), 400

    ext = filename.rsplit(".", 1)[-1].lower()
    new_name = f"{uuid.uuid4().hex}.{ext}"

    upload_dir = os.path.join(current_app.root_path, "static", "uploads")
    os.makedirs(upload_dir, exist_ok=True)

    path = os.path.join(upload_dir, new_name)
    f.save(path)

    # This is what you'll store in DB as image_url
    url = f"/static/uploads/{new_name}"
    return jsonify({"ok": True, "url": url}), 201