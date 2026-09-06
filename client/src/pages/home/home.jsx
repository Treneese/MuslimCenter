import "../../styles/home.css";
import useHomeData from "./usehomedata";
import Hero from "./components/hero";
import ThisWeek from "./components/thisweek";
import TodaysPrayerTimes from "./components/todaysprayertimes";
import SupportMasjid from "./components/supportmasjid";
import GetInvolved from "./components/getinvolved";
import Calendar from "../calendar";

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
    <div className="homePage">
      <div className="homeHeroWrap">
        <Hero />
      </div>

      <div className="homeDivider" />

      <section className="homeContainer">
        <div className="homeTwoCol">
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