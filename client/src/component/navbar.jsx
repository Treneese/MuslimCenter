import { NavLink } from "react-router-dom";
import logo from "../assets/MuslimCenterlogo.webp";
import "../styles/navbar.css";
import "../styles/components.css";

export default function Navbar() {
  const navClass = ({ isActive }) =>
    `siteNavLink${isActive ? " active" : ""}`;

  return (
    <header className="siteHeader">
      <nav className="siteNav">
        <NavLink to="/" className="brand">
          <img src={logo} alt="Muslim Center logo" className="brandLogo" />
          <div className="brandText">
            <div className="brandTitle">Muslim Center</div>
            <div className="brandSubtitle">Mosque & Community Hub</div>
          </div>
        </NavLink>

        <div className="siteNavLinks">
          <NavLink to="/" className={navClass} end>Home</NavLink>
          <NavLink to="/about" className={navClass}>About</NavLink>
          <NavLink to="/learn" className={navClass}>Learn</NavLink>
          <NavLink to="/services" className={navClass}>Services</NavLink>
          <NavLink to="/programs" className={navClass}>Programs</NavLink>
          <NavLink to="/prayer-times" className={navClass}>Prayer Times</NavLink>
          <NavLink to="/events" className={navClass}>Events</NavLink>
          <NavLink to="/donate" className={navClass}>Donate</NavLink>
          <NavLink to="/contact" className={navClass}>Contact</NavLink>
          <NavLink to="/get-involved" className={navClass}>Get Involved</NavLink>
        </div>
      </nav>
    </header>
  );
}