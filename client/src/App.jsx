import { Routes, Route } from "react-router-dom";

import Navbar from "./component/navbar.jsx";
import Footer from "./component/footer.jsx";

import Home from "./pages/home/home.jsx";
import About from "./pages/about/aboutindex";
import History from "./pages/about/history";
import Leadership from "./pages/about/leadership";
import MajlisAshuraBoard from "./pages/about/majisashura.jsx";
import ImamsPage from "./pages/about/imams.jsx";
import ExecutiveCommittee from "./pages/about/executivecommittee.jsx";
import Partners from "./pages/about/partners";

import Programs from "./pages/programs.jsx";
import PrayerTimes from "./pages/prayertimes.jsx";
import Events from "./pages/events.jsx";
import Donate from "./pages/donate.jsx";
import Contact from "./pages/contact.jsx";
import Admin from "./pages/admin/admin.jsx";
import QuickPay from "./pages/quickpay";

import LearnIndex from "./pages/learn/learnindex";
import WhatIsIslam from "./pages/learn/whatisislam";
import IslamForKids from "./pages/learn/islamforkids";
import NewToIslam from "./pages/learn/newtoislam";
import Faq from "./pages/learn/faq";

import ServicesIndex from "./pages/services/servicesindex";
import Marriage from "./pages/services/marriage";
import FamilyDispute from "./pages/services/familydispute";
import Shahada from "./pages/services/shahada";
import Janazah from "./pages/services/janazah";

import GetInvolvedIndex from "./pages/get-involved/getinvolvedindex";
import Volunteer from "./pages/get-involved/volunteer";
import SpaceRental from "./pages/get-involved/spacerental";
import Partner from "./pages/get-involved/partner";
import Member from "./pages/get-involved/member";
import Appointment from "./pages/get-involved/appointment";




export default function App() {
  return (
    <div style={{ minHeight: "100vh", background:"ffffff" }}>
      <Navbar />

      <main style={{ maxWidth: 1100, margin: "0 auto", padding: "22px 18px" }}>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/about" element={<About />} />
          <Route path="/about/history" element={<History />} />
          <Route path="/about/leadership" element={<Leadership />} />
          <Route path="/about/leadership/majlis-ashura" element={<MajlisAshuraBoard />} />
          <Route path="/about/leadership/imams" element={<ImamsPage />} />
          <Route path="/about/leadership/executive" element={<ExecutiveCommittee />} />
          <Route path="/about/partners" element={<Partners />} />

          <Route path="/programs" element={<Programs />} />

          <Route path="/learn" element={<LearnIndex />} />
          <Route path="/learn/what-is-islam" element={<WhatIsIslam />} />
          <Route path="/learn/islam-for-kids" element={<IslamForKids />} />
          <Route path="/learn/new-to-islam" element={<NewToIslam />} />
          <Route path="/learn/faq" element={<Faq />} />

          <Route path="/prayer-times" element={<PrayerTimes />} />
          <Route path="/events" element={<Events />} />

          <Route path="/services" element={<ServicesIndex />} />
          <Route path="/services/marriage" element={<Marriage />} />
          <Route path="/services/family-dispute" element={<FamilyDispute />} />
          <Route path="/services/shahada" element={<Shahada />} />
          <Route path="/services/janazah" element={<Janazah />} />

          <Route path="/donate" element={<Donate />} />
          <Route path="/quickpay" element={<QuickPay />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="/get-involved" element={<GetInvolvedIndex />} />
          <Route path="/get-involved/volunteer" element={<Volunteer />} />
          <Route path="/get-involved/space-rental" element={<SpaceRental />} />
          <Route path="/get-involved/partner" element={<Partner />} />
          <Route path="/get-involved/member" element={<Member />} />
          <Route path="/get-involved/appointment" element={<Appointment />} />

          <Route path="/admin" element={<Admin />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}