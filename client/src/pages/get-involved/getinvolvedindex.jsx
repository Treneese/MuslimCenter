import SectionCards from "../../component/sectioncard";

export default function GetInvolvedIndex() {
  const items = [
    { to: "/get-involved/volunteer", title: "Volunteer", subtitle: "Serve the community and support programs." },
    { to: "/get-involved/space-rental", title: "Space Rental", subtitle: "Request to rent community space." },
    { to: "/get-involved/partner", title: "Partner With Us", subtitle: "Collaborate and sponsor initiatives." },
    { to: "/get-involved/member", title: "Become a Member", subtitle: "Membership info and sign-up." },
    { to: "/get-involved/appointment", title: "Book an Appointment", subtitle: "Schedule a meeting or request support." },
  ];

  return (
    <div className="page">
      <h1 className="pageTitle">Get Involved</h1>
      <p className="pageSubtitle" style={{ maxWidth: 900 }}>
        Volunteer, partner, become a member, or request services.
      </p>

      <SectionCards items={items} />
    </div>
  );
}