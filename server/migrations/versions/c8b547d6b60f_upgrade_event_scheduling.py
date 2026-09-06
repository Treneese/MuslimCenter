"""upgrade event scheduling

Revision ID: c8b547d6b60f
Revises: 06f026757db9
"""

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = "c8b547d6b60f"
down_revision = "06f026757db9"
branch_labels = None
depends_on = None


def upgrade():
    with op.batch_alter_table("events", schema=None) as batch_op:
        batch_op.add_column(
            sa.Column(
                "dates_json",
                sa.Text(),
                nullable=True
            )
        )

        batch_op.add_column(
            sa.Column(
                "start_time_type",
                sa.String(length=20),
                nullable=True
            )
        )

        batch_op.add_column(
            sa.Column(
                "end_time_type",
                sa.String(length=20),
                nullable=True
            )
        )

        batch_op.add_column(
            sa.Column(
                "start_time_value",
                sa.String(length=30),
                nullable=True
            )
        )

        batch_op.add_column(
            sa.Column(
                "end_time_value",
                sa.String(length=30),
                nullable=True
            )
        )

        # Existing events need a value.
        batch_op.add_column(
            sa.Column(
                "all_day",
                sa.Boolean(),
                nullable=False,
                server_default=sa.false()
            )
        )

        batch_op.add_column(
            sa.Column(
                "no_end_time",
                sa.Boolean(),
                nullable=False,
                server_default=sa.false()
            )
        )


def downgrade():
    with op.batch_alter_table("events", schema=None) as batch_op:
        batch_op.drop_column("no_end_time")
        batch_op.drop_column("all_day")
        batch_op.drop_column("end_time_value")
        batch_op.drop_column("start_time_value")
        batch_op.drop_column("end_time_type")
        batch_op.drop_column("start_time_type")
        batch_op.drop_column("dates_json")