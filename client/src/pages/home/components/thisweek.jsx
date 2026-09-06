import { useNavigate } from "react-router-dom";
import "../../../styles/home.css";
import { mediaUrl } from "../../../api";

function withFallback(url) {
  return url && String(url).trim() ? String(url).trim() : null;
}

export default function ThisWeek({ events = [], loading, error }) {
  const navigate = useNavigate();
  const list = Array.isArray(events) ? events.slice(0, 4) : [];

  return (
    <section className="thisWeekSection">
      <div className="homeSectionHeader">
        <h2 className="homeSectionTitle">This Week</h2>
        <button
  className="homePillBtn"
  onClick={() => navigate("/calendar")}
  type="button"
>
  View Full Calendar →
</button>
      </div>

      {loading ? <p className="homeMuted">Loading…</p> : null}
      {error ? <p style={{ color: "crimson" }}>{error}</p> : null}

      {!loading && !error && (
        <div className="thisWeekGrid">
          {list.map((e) => {
            const imgUrl = mediaUrl(
  withFallback(e.image_url)
);

            return (
              <div key={e.id} className="thisWeekCard">
                {imgUrl ? (
                  <div className="thisWeekImageWrap">
                    <img src={imgUrl} alt={e.title} className="thisWeekImage" />
                  </div>
                ) : null}

                <div className="thisWeekBody">
                  <div className="thisWeekCardTitle">{e.title}</div>

                  <div className="thisWeekMeta">
                    {(e.day || "").trim() ? `${e.day} • ` : ""}
                    {e.time || "Time TBD"}
                  </div>

                  <button
                    type="button"
                    className="thisWeekMiniLink"
                    onClick={() => navigate("/calendar")}
                  >
                    View Full Calendar →
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
}