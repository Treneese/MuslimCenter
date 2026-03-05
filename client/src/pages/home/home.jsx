// client/src/pages/home/Home.jsx
import useHomeData from "./usehomedata";
import Hero from "./components/hero";
import ThisWeek from "./components/thisweek";
import TodaysPrayerTimes from "./components/todaysprayertimes";
import SupportMasjid from "./components/supportmasjid";
import GetInvolved from "./components/getinvolved";

export default function Home() {
  const {
    events,
    prayerTimes,
    loadingEvents,
    loadingPrayer,
    eventsError,
    prayerError,
  } = useHomeData();

  return (
    <div>
   <div style={{ marginBottom: 18 }}>
  <Hero />
</div>
      <div style={divider} />

      <section style={container}>
        <div style={twoCol}>
          <ThisWeek events={events} loading={loadingEvents} error={eventsError} />
          <TodaysPrayerTimes
            prayerTimes={prayerTimes}
            loading={loadingPrayer}
            error={prayerError}
          />
        </div>
      </section>
      <SupportMasjid />
<GetInvolved />
    </div>
  );
}

const container = {
  maxWidth: 980,
  margin: "0 auto",
};

const twoCol = {
  display: "grid",
  gridTemplateColumns: "1.15fr 0.85fr",
  gap: 16,
  alignItems: "start",
};

const divider = {
  maxWidth: 980,
  margin: "0 auto",
  borderTop: "1px solid #cfe4d6",
};

// quick responsive fallback
const mq = window?.matchMedia?.("(max-width: 900px)")?.matches;
if (mq) twoCol.gridTemplateColumns = "1fr";