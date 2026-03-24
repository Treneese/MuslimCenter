import { useNavigate } from "react-router-dom";
import MapPanel from "./map";
import "../../../styles/home.css";

export default function GetInvolved() {
  const navigate = useNavigate();

  return (
    <section className="getInvolvedSection">
      <div className="getInvolvedGrid">
        <div>
          <h2 className="homeSectionTitle">Get Involved</h2>
          <p className="homeSectionText">
            Become a volunteer. Help support programs, events, and community outreach.
          </p>
          <button
            className="secondaryBtn"
            onClick={() => navigate("/get-involved")}
            type="button"
          >
            Volunteer →
          </button>
        </div>

        <MapPanel />
      </div>
    </section>
  );
}