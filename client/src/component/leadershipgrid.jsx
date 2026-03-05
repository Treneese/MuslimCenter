export default function LeadershipGrid({ children }) {
  return <div style={grid}>{children}</div>;
}

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
  gap: 14,
};

const mq = window?.matchMedia?.("(max-width: 900px)")?.matches;
if (mq) grid.gridTemplateColumns = "1fr";