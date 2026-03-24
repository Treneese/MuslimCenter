import "../../../styles/home.css";

export default function MapPanel() {
  const address = "Detroit Muslim Community Center, Detroit, MI";
  const mapsUrl =
    "https://www.google.com/maps?q=" + encodeURIComponent(address) + "&output=embed";

  return (
    <section className="mapPanelSection">
      <div className="mapPanelCard">
        <div className="mapPanelLeft">
          <h3 className="mapPanelTitle">Get Involved</h3>
          <p className="mapPanelText">
            Visit us, join a program, or volunteer. We’d love to welcome you.
          </p>

          <div className="mapPanelInfoGrid">
            <div>
              <div className="mapPanelLabel">Address</div>
              <div className="mapPanelValue">1605 Davison St W, Detroit, MI 48238</div>
            </div>
            <div>
              <div className="mapPanelLabel">Phone</div>
              <div className="mapPanelValue">(313) 883-3330</div>
            </div>
            <div>
              <div className="mapPanelLabel">Email</div>
              <div className="mapPanelValue">contact@themuslimcenter.com</div>
            </div>
          </div>
        </div>

        <div className="mapPanelRight">
          <iframe
            title="map"
            src={mapsUrl}
            className="mapPanelIframe"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}