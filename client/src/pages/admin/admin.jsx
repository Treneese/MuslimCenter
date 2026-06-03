import { useMemo, useState } from "react";
import EventsAdmin from "./eventsadmin";
import ProgramsAdmin from "./programsadmin";
import IqamahAdmin from "./iqamahadmin";
import { TabButton } from "./adminutils";
import "../../styles/pages.css";


export default function Admin() {
  const [adminKey, setAdminKey] = useState("");
  const [tab, setTab] = useState("events");

  const tabs = useMemo(
    () => [
      { id: "events", label: "Events" },
      { id: "programs", label: "Programs" },
      { id: "iqamah", label: "Iqamah" },
    ],
    []
  );

  return (
    <div className="page adminPage">
      <section className="adminHeaderCard">
        <h1 className="pageTitle">Admin</h1>

        <div className="adminKeyRow">
          <label className="adminLabel" htmlFor="admin-key">
            Admin Key
          </label>
          <input
            id="admin-key"
            value={adminKey}
            onChange={(e) => setAdminKey(e.target.value)}
            type="password"
            className="adminInput"
            placeholder="Enter admin key"
          />
        </div>
      </section>

      <div className="adminTabs">
        {tabs.map((t) => (
          <TabButton key={t.id} active={tab === t.id} onClick={() => setTab(t.id)}>
            {t.label}
          </TabButton>
        ))}
      </div>

      <hr className="adminDivider" />

      {tab === "events" ? <EventsAdmin adminKey={adminKey} /> : null}
      {tab === "programs" ? <ProgramsAdmin adminKey={adminKey} /> : null}
      {tab === "iqamah" ? <IqamahAdmin adminKey={adminKey} /> : null}
    </div>
  );
}