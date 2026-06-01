import "../../styles/pages.css";
import forgottenHarvestLogo from "../../assets/partners/forgotten-harvest.png";
import hudaLogo from "../../assets/partners/huda-clinic.png";
import icdLogo from "../../assets/partners/icdLogo.png";
import dmmLogo from "../../assets/partners/dmmLogo.png";
import miplLogo from "../../assets/partners/MIPL.jpg";
import uhfLogo from "../../assets/partners/UHFLogo.png";

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
    {
      name: "Islamic Center of Detroit (ICD)",
      image: icdLogo,
      description:
        "The Islamic Center of Detroit (ICD) is a leading institution dedicated to serving the spiritual, educational, and social needs of the Muslim community. Through programs in religious education, community outreach, and interfaith engagement, ICD plays a vital role in strengthening faith, unity, and service across the region. The Muslim Center values its connection with ICD in advancing shared goals of community development and collective impact.",
      website: "https://icdonline.org",
    },
    {
      name: "Detroit Muslim Mission",
      image: dmmLogo,
      description:
        "Detroit Muslim Mission is committed to uplifting the community through outreach, service, and grassroots engagement. Focused on meeting real needs and building strong relationships, the organization works to support individuals and families while fostering unity and purpose. The Muslim Center appreciates its alignment with Detroit Muslim Mission in serving the broader community with compassion and action.",
      website: "https://detroitmuslimmission.com",
    },
 {
      name: "Michigan Interfaith Power & Light",
      image: miplLogo,
      description:
        "Michigan Interfaith Power & Light’s mission is to inspire and equip people of faith to exercise stewardship of and love for all Creation. We offer practical ways to put faith into action by promoting energy efficiency, renewable energy, and other sustainable practices that lead to a cleaner, healthier, and more just world.",
      website: "https://www.miipl.org",
    },
     {
      name: "United Humanitarian Foundation",
      image: uhfLogo,
      description:
        "UHF Relief envisions a world where communities are empowered, and all individuals have access to basic human needs. Together, we strive to bridge the gaps of inequality, ensuring that compassion and resources reach every corner of the globe.",
      website: "https://uhfrelief.org/",
    },
  ];

  return (
    <div className="page">
      <section className="learnHero">
        <p className="learnEyebrow">Partners</p>
        <h1 className="pageTitle">Community Partners</h1>
        <p className="pageSubtitle pageIntro">
          The Muslim Center works alongside trusted organizations to serve the
          Detroit community through food access, healthcare, education, and
          outreach.
        </p>
      </section>

      <section className="partnersGrid">
        {partners.map((partner) => (
          <div key={partner.name} className="partnerCard">
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