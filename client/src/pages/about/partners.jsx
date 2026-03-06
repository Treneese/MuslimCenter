import forgottenHarvestLogo from "../../assets/partners/forgotten-harvest.png";
import hudaLogo from "../../assets/partners/huda-clinic.png";


export default function PartnersPage() {
  const partners = [
    {
      name: "Forgotten Harvest",
      image: forgottenHarvestLogo,
      description:
        "Forgotten Harvest is a metro Detroit food rescue organization dedicated to relieving hunger and preventing nutritious food waste. The Muslim Center partners with Forgotten Harvest to support food distribution efforts and serve families in need throughout the Detroit community.",
      website: "https://www.forgottenharvest.org",
    },

    {
      name: "HUDA Clinic",
      image: hudaLogo,
      description:
        "HUDA Clinic provides free and low-cost healthcare services to underserved communities in southeast Michigan. Through this partnership, the Muslim Center supports access to health education, medical resources, and community wellness initiatives.",
      website: "https://www.hudaclinic.org",
    },
  ];

  return (
    <div className="page">
      <header className="pageHeader">
        <h1 className="pageTitle">Community Partners</h1>

        <p className="pageSubtitle">
          The Muslim Center works alongside trusted organizations to serve the
          Detroit community through food access, healthcare, education, and
          outreach. These partnerships help expand the impact of our programs
          and strengthen the support available to families in our city.
        </p>
      </header>

      <section className="partnersGrid">
        {partners.map((partner, index) => (
          <div key={index} className="partnerCard">
            <img
              src={partner.image}
              alt={partner.name}
              className="partnerLogo"
            />

            <h3>{partner.name}</h3>

            <p>{partner.description}</p>

            <a
              href={partner.website}
              target="_blank"
              rel="noreferrer"
              className="partnerLink"
            >
              Visit Website →
            </a>
          </div>
        ))}
      </section>
    </div>
  );
}