import SectionCards from "../../component/sectioncard";
import "../../styles/pages.css";

import volunteerImg from "../../assets/getinvolved/volunteer.jpg";
import rentspaceImg from "../../assets/getinvolved/rentspace.png";
import partnerImg from "../../assets/getinvolved/partnerwithus.jpg";
import bookImg from "../../assets/getinvolved/book.jpg";
import memberImg from "../../assets/getinvolved/bemember.jpg";

export default function GetInvolvedIndex() {
  const items = [
    {
      to: "/get-involved/volunteer",
      title: "Volunteer",
      subtitle: "Serve the community and support programs.",
      image: volunteerImg,
    },
    {
      to: "/get-involved/space-rental",
      title: "Space Rental",
      subtitle: "Request to rent community space.",
      image: rentspaceImg,
    },
    {
      to: "/get-involved/partner",
      title: "Partner With Us",
      subtitle: "Collaborate and sponsor initiatives.",
      image: partnerImg,
    },
    {
      to: "/get-involved/member",
      title: "Become a Member",
      subtitle: "Membership info and sign-up.",
      image: memberImg,
    },
    {
      to: "/get-involved/appointment",
      title: "Book an Appointment",
      subtitle: "Schedule a meeting or request support.",
      image: bookImg,
    },
  ];

  return (
    <div className="page">
      <section className="learnHero">
        <p className="learnEyebrow">Get Involved</p>
        <h1 className="pageTitle">Get Involved</h1>
        <p className="pageSubtitle pageIntro">
          Volunteer, partner, become a member, request support, or connect with
          the Muslim Center through one of the opportunities below.
        </p>
      </section>

      <SectionCards items={items} />
    </div>
  );
}