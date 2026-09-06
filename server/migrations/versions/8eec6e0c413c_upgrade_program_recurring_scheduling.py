"""upgrade program recurring scheduling

Revision ID: 8eec6e0c413c
Revises: c8b547d6b60f
"""

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = "8eec6e0c413c"
down_revision = "c8b547d6b60f"
branch_labels = None
depends_on = None


def upgrade():
    with op.batch_alter_table("programs", schema=None) as batch_op:
        batch_op.add_column(
            sa.Column(
                "recurrence_type",
                sa.String(length=30),
                nullable=True,
            )
        )

        batch_op.add_column(
            sa.Column(
                "weekdays_json",
                sa.Text(),
                nullable=True,
            )
        )

        batch_op.add_column(
            sa.Column(
                "monthly_week",
                sa.String(length=20),
                nullable=True,
            )
        )

        batch_op.add_column(
            sa.Column(
                "recurrence_start_date",
                sa.String(length=10),
                nullable=True,
            )
        )

        batch_op.add_column(
            sa.Column(
                "recurrence_end_date",
                sa.String(length=10),
                nullable=True,
            )
        )

        batch_op.add_column(
            sa.Column(
                "start_time_type",
                sa.String(length=20),
                nullable=True,
            )
        )

        batch_op.add_column(
            sa.Column(
                "start_time_value",
                sa.String(length=30),
                nullable=True,
            )
        )

        batch_op.add_column(
            sa.Column(
                "end_time_type",
                sa.String(length=20),
                nullable=True,
            )
        )

        batch_op.add_column(
            sa.Column(
                "end_time_value",
                sa.String(length=30),
                nullable=True,
            )
        )

        batch_op.add_column(
            sa.Column(
                "no_end_time",
                sa.Boolean(),
                nullable=False,
                server_default=sa.false(),
            )
        )


def downgrade():
    with op.batch_alter_table("programs", schema=None) as batch_op:
        batch_op.drop_column("no_end_time")
        batch_op.drop_column("end_time_value")
        batch_op.drop_column("end_time_type")
        batch_op.drop_column("start_time_value")
        batch_op.drop_column("start_time_type")
        batch_op.drop_column("recurrence_end_date")
        batch_op.drop_column("recurrence_start_date")
        batch_op.drop_column("monthly_week")
        batch_op.drop_column("weekdays_json")
        batch_op.drop_column("recurrence_type")