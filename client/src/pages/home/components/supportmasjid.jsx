import { useNavigate } from "react-router-dom";
import "../../../styles/home.css";

export default function SupportMasjid() {
  const navigate = useNavigate();

  return (
    <section className="supportMasjidSection">
      <h2 className="homeSectionTitle">Support Your Masjid</h2>
      <p className="homeSectionText">Building a stronger community together.</p>

      <div className="supportMasjidCard">
        <div className="supportMasjidRow">
          <div>
            <div className="supportMasjidAmount">$0</div>
            <div className="homeMuted">Raised (hook up later)</div>
          </div>

          <button className="secondaryBtn" onClick={() => navigate("/donate")}>
            Donate Now →
          </button>
        </div>

        <div className="supportMasjidBarOuter">
          <div className="supportMasjidBarInner" />
        </div>

        <div className="homeMuted" style={{ marginTop: 10, fontSize: 12 }}>
          We’ll connect the raised amount + goal during the donations phase.
        </div>
      </div>
    </section>
  );
}