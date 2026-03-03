from flask import Flask
from flask_cors import CORS
from dotenv import load_dotenv

load_dotenv()

from config import db, migrate
from routes.health import health_bp
from routes.events import events_bp
from routes.programs import programs_bp
from routes.prayer_times import prayer_times_bp
from routes.contact import contact_bp
from routes.iqamah import iqamah_bp
from routes.rsvp import rsvp_bp
from routes.uploads import uploads_bp


def create_app():
    app = Flask(__name__)
    app.config.from_object("config.Config")

    CORS(app)

    db.init_app(app)
    migrate.init_app(app, db)

    app.register_blueprint(health_bp)
    app.register_blueprint(events_bp)
    app.register_blueprint(programs_bp)
    app.register_blueprint(prayer_times_bp)
    app.register_blueprint(iqamah_bp)
    app.register_blueprint(contact_bp)
    app.register_blueprint(rsvp_bp)
    app.register_blueprint(uploads_bp)

    return app

app = create_app()

if __name__ == "__main__":
    app.run(port=5000, debug=True)