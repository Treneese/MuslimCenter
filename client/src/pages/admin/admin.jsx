import { useMemo, useState } from "react";
import EventsAdmin from "./eventsadmin";
import ProgramsAdmin from "./programsadmin";
import IqamahAdmin from "./iqamahadmin";
import { TabButton } from "./adminutils";

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
    <div style={{ padding: 24 }}>
      <h1 style={{ marginTop: 0 }}>Admin</h1>

      <label style={{ display: "block", marginBottom: 12 }}>
        Admin Key:
        <input
          value={adminKey}
          onChange={(e) => setAdminKey(e.target.value)}
          type="password"
          style={{ marginLeft: 10, padding: 8, width: 280 }}
        />
      </label>

      <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 18 }}>
        {tabs.map((t) => (
          <TabButton key={t.id} active={tab === t.id} onClick={() => setTab(t.id)}>
            {t.label}
          </TabButton>
        ))}
      </div>

      <hr />

      {tab === "events" ? <EventsAdmin adminKey={adminKey} /> : null}
      {tab === "programs" ? <ProgramsAdmin adminKey={adminKey} /> : null}
      {tab === "iqamah" ? <IqamahAdmin adminKey={adminKey} /> : null}
    </div>
  );
}