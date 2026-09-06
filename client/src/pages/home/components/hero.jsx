import { useNavigate } from "react-router-dom";
import heroImg from "../../../assets/muslim_center.png";
import "../../../styles/home.css";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section
      className="heroSection"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      <div className="heroOverlay" />

      <div className="heroContent">
        <h1 className="heroTitle">The Muslim Center <br></br>
          (Mosque & Community Center)</h1>
        <p className="heroSubtitle">
          A welcoming mosque and gathering place for the Muslim community in Detroit.
        </p>

        <div className="heroCtaRow">
          <button className="heroBtn gold" onClick={() => navigate("/prayer-times")} type="button">
            Prayer Times
          </button>
          <button className="heroBtn green" onClick={() => navigate("/programs")} type="button">
            Programs
          </button>
          <button className="heroBtn teal" onClick={() => navigate("/events")} type="button">
            Events
          </button>
          <button className="heroBtn dark" onClick={() => navigate("/donate")} type="button">
            Donate
          </button>
        </div>
      </div>
    </section>
  );
}