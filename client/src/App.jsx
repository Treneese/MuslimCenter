import { Routes, Route } from "react-router-dom";

import Navbar from "./component/navbar.jsx";
import Footer from "./component/footer.jsx";

import Home from "./pages/home.jsx";
import About from "./pages/about.jsx";
import Programs from "./pages/programs.jsx";
import PrayerTimes from "./pages/prayertimes.jsx";
import Events from "./pages/events.jsx";
import Donate from "./pages/donate.jsx";
import Contact from "./pages/contact.jsx";
import Admin from "./pages/admin.jsx";
import QuickPay from "./pages/quickpay";

export default function App() {
  return (
    <div style={{ minHeight: "100vh", background:"ffffff" }}>
      <Navbar />

      <main style={{ maxWidth: 1100, margin: "0 auto", padding: "22px 18px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/prayer-times" element={<PrayerTimes />} />
          <Route path="/events" element={<Events />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/quickpay" element={<QuickPay />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}