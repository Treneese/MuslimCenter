import os
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate


db = SQLAlchemy()
migrate = Migrate()


class Config:
    BASE_DIR = os.path.abspath(
        os.path.dirname(__file__)
    )

    DATABASE_PATH = os.getenv(
        "DATABASE_PATH",
        os.path.join(
            BASE_DIR,
            "instance",
            "app.db",
        ),
    )

    SQLALCHEMY_DATABASE_URI = (
        "sqlite:///" + DATABASE_PATH
    )

    SQLALCHEMY_TRACK_MODIFICATIONS = False