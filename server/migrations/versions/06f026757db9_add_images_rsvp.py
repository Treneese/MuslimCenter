"""add images + rsvp

Revision ID: 06f026757db9
Revises: 6ac425782768
Create Date: 2026-02-27 11:33:18.499072

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '06f026757db9'
down_revision = '6ac425782768'
branch_labels = None
depends_on = None


def upgrade():
    bind = op.get_bind()
    insp = sa.inspect(bind)

    # ---------- 1) event_rsvps table (create only if missing) ----------
    existing_tables = insp.get_table_names()
    if "event_rsvps" not in existing_tables:
        op.create_table(
            "event_rsvps",
            sa.Column("id", sa.Integer(), primary_key=True),
            sa.Column("event_id", sa.Integer(), sa.ForeignKey("events.id"), nullable=False),
            sa.Column("name", sa.String(length=120), nullable=False),
            sa.Column("email", sa.String(length=160), nullable=True),
            sa.Column("phone", sa.String(length=40), nullable=True),
            sa.Column("guests", sa.Integer(), nullable=False, server_default=sa.text("1")),
            sa.Column("note", sa.Text(), nullable=True),
            sa.Column("created_at", sa.DateTime(), nullable=False, server_default=sa.text("CURRENT_TIMESTAMP")),
        )

    # Helper to add column only if missing (SQLite-friendly)
    def add_col_if_missing(table_name, column: sa.Column):
        cols = [c["name"] for c in insp.get_columns(table_name)]
        if column.name not in cols:
            with op.batch_alter_table(table_name, schema=None) as batch_op:
                batch_op.add_column(column)

    # ---------- 2) events columns (add only if missing) ----------
    add_col_if_missing("events", sa.Column("image_url", sa.String(length=500), nullable=True))
    add_col_if_missing("events", sa.Column("is_special", sa.Boolean(), nullable=False, server_default=sa.text("0")))
    add_col_if_missing("events", sa.Column("rsvp_enabled", sa.Boolean(), nullable=False, server_default=sa.text("0")))
    add_col_if_missing("events", sa.Column("rsvp_capacity", sa.Integer(), nullable=True))
    add_col_if_missing("events", sa.Column("location", sa.String(length=160), nullable=True))
    add_col_if_missing("events", sa.Column("created_at", sa.DateTime(), nullable=True))

    # ---------- 3) programs columns ----------
    add_col_if_missing("programs", sa.Column("image_url", sa.String(length=500), nullable=True))
    add_col_if_missing("programs", sa.Column("created_at", sa.DateTime(), nullable=True))