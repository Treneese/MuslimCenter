"""add program monthly patterns

Revision ID: 2b6b02f9c692
Revises: 8eec6e0c413c
"""

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = "2b6b02f9c692"
down_revision = "8eec6e0c413c"
branch_labels = None
depends_on = None


def upgrade():
    with op.batch_alter_table(
        "programs",
        schema=None,
    ) as batch_op:
        batch_op.add_column(
            sa.Column(
                "monthly_patterns_json",
                sa.Text(),
                nullable=True,
            )
        )


def downgrade():
    with op.batch_alter_table(
        "programs",
        schema=None,
    ) as batch_op:
        batch_op.drop_column(
            "monthly_patterns_json"
        )