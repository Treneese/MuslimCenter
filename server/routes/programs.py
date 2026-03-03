from flask import Blueprint, jsonify, request
from config import db
from models.program import Program
from utils.admin import require_admin

programs_bp = Blueprint("programs", __name__)

@programs_bp.get("/api/programs")
def get_programs():
    rows = Program.query.order_by(Program.id.desc()).all()
    return jsonify([p.to_dict() for p in rows])

@programs_bp.get("/api/programs/<int:program_id>")
def get_program(program_id):
    p = Program.query.get_or_404(program_id)
    return jsonify(p.to_dict())

@programs_bp.post("/api/programs")
@require_admin
def create_program():
    data = request.get_json() or {}
    p = Program(
        title=(data.get("title") or "").strip(),
        audience=data.get("audience"),
        schedule=data.get("schedule"),
        description=data.get("description"),
        image_url=data.get("image_url"),
    )
    if not p.title:
        return jsonify({"error": "title is required"}), 400

    db.session.add(p)
    db.session.commit()
    return jsonify(p.to_dict()), 201

@programs_bp.put("/api/programs/<int:program_id>")
@require_admin
def update_program(program_id):
    p = Program.query.get_or_404(program_id)
    data = request.get_json() or {}

    if "title" in data:
        p.title = (data.get("title") or "").strip()
        if not p.title:
            return jsonify({"error": "title is required"}), 400

    for field in ["audience", "schedule", "description", "image_url"]:
        if field in data:
            setattr(p, field, data.get(field))

    db.session.commit()
    return jsonify(p.to_dict())

@programs_bp.delete("/api/programs/<int:program_id>")
@require_admin
def delete_program(program_id):
    p = Program.query.get_or_404(program_id)
    db.session.delete(p)
    db.session.commit()
    return jsonify({"deleted": True, "id": program_id})