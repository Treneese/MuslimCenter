import os
from functools import wraps
from flask import request, jsonify

def require_admin(fn):
    @wraps(fn)
    def wrapper(*args, **kwargs):
        admin_key = os.getenv("ADMIN_KEY")
        provided = request.headers.get("x-admin-key")

        if not admin_key or provided != admin_key:
            return jsonify({"error": "Unauthorized"}), 401

        return fn(*args, **kwargs)
    return wrapper