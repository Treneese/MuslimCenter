import {
  useEffect,
  useMemo,
  useState,
} from "react";

import { apiUrl } from "../api";

import {
  buildCalendarItems,
  getCalendarGridRange,
  getDateKey,
} from "../utils/calendar";


const WEEKDAYS = [
  "Sun",
  "Mon",
  "Tue",
  "Wed",
  "Thu",
  "Fri",
  "Sat",
];


function monthLabel(date) {
  return date.toLocaleDateString(
    "en-US",
    {
      month: "long",
      year: "numeric",
    }
  );
}


function formatTime(item) {
  if (item.all_day) {
    return "All Day";
  }

  if (!item.start_time_value) {
    return "";
  }

 if (
  item.start_time_type ===
  "PRAYER"
) {
  return item.start_time_value
    .toLowerCase()
    .replace(
      /\b\w/g,
      (letter) =>
        letter.toUpperCase()
    );
}

  const [
    hours,
    minutes,
  ] = item.start_time_value.split(":");

  if (
    hours === undefined ||
    minutes === undefined
  ) {
    return item.start_time_value;
  }

  const date = new Date();

  date.setHours(
    Number(hours),
    Number(minutes),
    0,
    0
  );

  return date.toLocaleTimeString(
    "en-US",
    {
      hour: "numeric",
      minute: "2-digit",
    }
  );
}


function CalendarItem({
  item,
  onSelect,
}) {
  const time = formatTime(item);

  return (
    <button
      type="button"
      className={`calendarItem calendarItem${item.type}`}
      onClick={() =>
        onSelect(item)
      }
    >
      <div className="calendarItemTitle">
        {item.title}
      </div>

      {time && (
        <div className="calendarItemTime">
          {time}
        </div>
      )}
    </button>
  );
}
function formatCalendarTime(
  type,
  value
) {
  if (!value) {
    return "";
  }

  if (type === "PRAYER") {
    return value
      .toLowerCase()
      .replace(
        /\b\w/g,
        (letter) =>
          letter.toUpperCase()
      );
  }

  const [hours, minutes] =
    value.split(":");

  if (
    hours === undefined ||
    minutes === undefined
  ) {
    return value;
  }

  const date = new Date();

  date.setHours(
    Number(hours),
    Number(minutes),
    0,
    0
  );

  return date.toLocaleTimeString(
    "en-US",
    {
      hour: "numeric",
      minute: "2-digit",
    }
  );
}

function CalendarDetail({
  item,
  onClose,
}) {
  if (!item) {
    return null;
  }

  const startTime =
    formatTime(item);

  const endTime =
  item.no_end_time
    ? ""
    : formatCalendarTime(
        item.end_time_type,
        item.end_time_value
      );

  return (
    <div
      className="calendarDetailOverlay"
      onClick={onClose}
    >
      <div
        className="calendarDetailCard"
        onClick={(e) =>
          e.stopPropagation()
        }
      >
        <button
          type="button"
          className="calendarDetailClose"
          onClick={onClose}
        >
          ×
        </button>

        <div className="calendarDetailType">
          {item.type === "EVENT"
            ? "Event"
            : "Program"}
        </div>

        <h2 className="calendarDetailTitle">
          {item.title}
        </h2>

        <div className="calendarDetailMeta">
          <span>
            {item.date}
          </span>

          {startTime && (
            <span>
              {startTime}
            </span>
          )}

          {endTime && (
            <span>
              to {endTime}
            </span>
          )}
        </div>

        {item.location && (
          <div className="calendarDetailLine">
            <strong>
              Location:
            </strong>{" "}
            {item.location}
          </div>
        )}

        {item.audience && (
          <div className="calendarDetailLine">
            <strong>
              Audience:
            </strong>{" "}
            {item.audience}
          </div>
        )}

        {item.category && (
          <div className="calendarDetailLine">
            <strong>
              Category:
            </strong>{" "}
            {item.category}
          </div>
        )}

        {item.description && (
          <p className="calendarDetailDescription">
            {item.description}
          </p>
        )}
      </div>
    </div>
  );
}


export default function Calendar() {
  const [events, setEvents] =
    useState([]);

  const [programs, setPrograms] =
    useState([]);

  const [status, setStatus] =
    useState("Loading calendar...");

  const [filter, setFilter] =
    useState("ALL");

  const [
  selectedItem,
  setSelectedItem,
] = useState(null);

  const [currentMonth, setCurrentMonth] =
    useState(() => {
      const now = new Date();

  

      return new Date(
        now.getFullYear(),
        now.getMonth(),
        1
      );
    });


  useEffect(() => {
    async function loadCalendar() {
      try {
        const [
          eventsResponse,
          programsResponse,
        ] = await Promise.all([
          fetch(
            apiUrl("/api/events")
          ),
          fetch(
            apiUrl("/api/programs")
          ),
        ]);

        if (
          !eventsResponse.ok ||
          !programsResponse.ok
        ) {
          throw new Error(
            "Failed to load calendar."
          );
        }

        const [
          eventsData,
          programsData,
        ] = await Promise.all([
          eventsResponse.json(),
          programsResponse.json(),
        ]);

        setEvents(
          Array.isArray(eventsData)
            ? eventsData
            : []
        );

        setPrograms(
          Array.isArray(programsData)
            ? programsData
            : []
        );

        setStatus("");
      } catch (error) {
        console.error(error);

        setStatus(
          "Unable to load calendar."
        );
      }
    }

    loadCalendar();
  }, []);


  const gridRange = useMemo(
    () =>
      getCalendarGridRange(
        currentMonth.getFullYear(),
        currentMonth.getMonth()
      ),
    [currentMonth]
  );


  const calendarItems = useMemo(
    () =>
      buildCalendarItems(
        events,
        programs,
        gridRange.start,
        gridRange.end
      ),
    [
      events,
      programs,
      gridRange,
    ]
  );


  const visibleItems = useMemo(
    () =>
      calendarItems.filter(
        (item) =>
          filter === "ALL" ||
          item.type === filter
      ),
    [
      calendarItems,
      filter,
    ]
  );


  const itemsByDate = useMemo(
    () => {
      const grouped = {};

      for (
        const item of visibleItems
      ) {
        if (!grouped[item.date]) {
          grouped[item.date] = [];
        }

        grouped[item.date].push(
          item
        );
      }

      return grouped;
    },
    [visibleItems]
  );


  const calendarDays = useMemo(
    () => {
      const days = [];

      const current =
        new Date(gridRange.start);

      while (
        current <= gridRange.end
      ) {
        days.push(
          new Date(current)
        );

        current.setDate(
          current.getDate() + 1
        );
      }

      return days;
    },
    [gridRange]
  );


  function previousMonth() {
    setCurrentMonth(
      new Date(
        currentMonth.getFullYear(),
        currentMonth.getMonth() - 1,
        1
      )
    );
  }


  function nextMonth() {
    setCurrentMonth(
      new Date(
        currentMonth.getFullYear(),
        currentMonth.getMonth() + 1,
        1
      )
    );
  }


  function goToday() {
    const now = new Date();

    setCurrentMonth(
      new Date(
        now.getFullYear(),
        now.getMonth(),
        1
      )
    );
  }


  const todayKey =
    getDateKey(new Date());

    const mobileItems =
  visibleItems.filter((item) => {
    const itemDate =
      new Date(
        `${item.date}T00:00:00`
      );

    return (
      itemDate.getMonth() ===
        currentMonth.getMonth() &&
      itemDate.getFullYear() ===
        currentMonth.getFullYear()
    );
  });


  return (
    <main className="calendarPage">

      <section className="calendarHeader">
        <div>

             <CalendarDetail
  item={selectedItem}
  onClose={() =>
    setSelectedItem(null)
  }
/>
          <div className="calendarEyebrow">
            Community Calendar
          </div>

          <h1 className="calendarTitle">
            {monthLabel(
              currentMonth
            )}
          </h1>

          <p className="calendarIntro">
            View upcoming events,
            classes, programs and
            community activities.
          </p>
        </div>

        <div className="calendarNav">
          <button
            type="button"
            className="ghostBtn"
            onClick={previousMonth}
          >
            ← Previous
          </button>

          <button
            type="button"
            className="secondaryBtn"
            onClick={goToday}
          >
            Today
          </button>

          <button
            type="button"
            className="ghostBtn"
            onClick={nextMonth}
          >
            Next →
          </button>
        </div>
      </section>


      <div className="calendarFilters">
        {[
          ["ALL", "All"],
          ["EVENT", "Events"],
          ["PROGRAM", "Programs"],
        ].map(
          ([value, label]) => (
            <button
              key={value}
              type="button"
              className={
                filter === value
                  ? "secondaryBtn"
                  : "ghostBtn"
              }
              onClick={() =>
                setFilter(value)
              }
            >
              {label}
            </button>
          )
        )}
      </div>


      {status && (
        <p className="calendarStatus">
          {status}
        </p>
      )}


      <section className="calendarShell">
        <div className="calendarWeekdays">
          {WEEKDAYS.map(
            (weekday) => (
              <div
                key={weekday}
                className="calendarWeekday"
              >
                {weekday}
              </div>
            )
          )}
        </div>


        <div className="calendarGrid">
          {calendarDays.map(
            (date) => {
              const key =
                getDateKey(date);

              const items =
                itemsByDate[key] || [];

              const currentMonthDay =
                date.getMonth() ===
                currentMonth.getMonth();

              const isToday =
                key === todayKey;

              return (
                <div
                  key={key}
                  className={[
                    "calendarDay",
                    !currentMonthDay
                      ? "calendarDayMuted"
                      : "",
                    isToday
                      ? "calendarDayToday"
                      : "",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                >
                  <div className="calendarDayNumber">
                    {date.getDate()}
                  </div>

                  <div className="calendarDayItems">
                    {items.map(
                      (item) => (
                       <CalendarItem
                            key={item.id}
                            item={item}
                            onSelect={
                                setSelectedItem
                            }
                        />
                      )
                    )}
                  </div>
                </div>
              );
            }
          )}
        </div>
      </section>

      <section className="calendarMobileList">
  {mobileItems.length === 0 ? (
    <div className="calendarMobileEmpty">
      No events or programs
      scheduled this month.
    </div>
  ) : (
    mobileItems.map((item) => {
      const itemDate =
        new Date(
          `${item.date}T00:00:00`
        );

      return (
        <button
          key={item.id}
          type="button"
          className={`calendarMobileItem calendarMobileItem${item.type}`}
          onClick={() =>
            setSelectedItem(item)
          }
        >
          <div className="calendarMobileDate">
            <span className="calendarMobileDay">
              {itemDate.toLocaleDateString(
                "en-US",
                {
                  weekday: "short",
                }
              )}
            </span>

            <strong>
              {itemDate.getDate()}
            </strong>
          </div>

          <div className="calendarMobileContent">
            <div className="calendarMobileType">
              {item.type === "EVENT"
                ? "Event"
                : "Program"}
            </div>

            <div className="calendarMobileTitle">
              {item.title}
            </div>

            {formatTime(item) && (
              <div className="calendarMobileTime">
                {formatTime(item)}
              </div>
            )}
          </div>
        </button>
      );
    })
  )}
</section>

    </main>
  );
}