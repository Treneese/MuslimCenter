const WEEKDAY_INDEX = {
  SUNDAY: 0,
  MONDAY: 1,
  TUESDAY: 2,
  WEDNESDAY: 3,
  THURSDAY: 4,
  FRIDAY: 5,
  SATURDAY: 6,
};


function parseDate(value) {
  if (!value) return null;

  const parts = value.split("-");

  if (parts.length !== 3) {
    return null;
  }

  const [year, month, day] =
    parts.map(Number);

  return new Date(
    year,
    month - 1,
    day
  );
}


function dateKey(date) {
  const year = date.getFullYear();

  const month = String(
    date.getMonth() + 1
  ).padStart(2, "0");

  const day = String(
    date.getDate()
  ).padStart(2, "0");

  return `${year}-${month}-${day}`;
}


function addDays(date, amount) {
  const next = new Date(date);

  next.setDate(
    next.getDate() + amount
  );

  return next;
}


function isBetween(
  date,
  rangeStart,
  rangeEnd
) {
  return (
    date >= rangeStart &&
    date <= rangeEnd
  );
}


function programAllowsDate(
  program,
  date
) {
  const programStart =
    parseDate(
      program.recurrence_start_date
    );

  const programEnd =
    parseDate(
      program.recurrence_end_date
    );

  if (
    programStart &&
    date < programStart
  ) {
    return false;
  }

  if (
    programEnd &&
    date > programEnd
  ) {
    return false;
  }

  return true;
}


function makeEventItem(
  event,
  date
) {
  return {
    id: `event-${event.id}-${date}`,
    source_id: event.id,
    type: "EVENT",
    date,
    title: event.title,
    category: event.category,
    location: event.location,
    description: event.description,
    image_url: event.image_url,

    start_time_type:
      event.start_time_type,

    start_time_value:
      event.start_time_value ||
      event.time,

    end_time_type:
      event.end_time_type,

    end_time_value:
      event.end_time_value,

    all_day:
      Boolean(event.all_day),

    no_end_time:
      Boolean(event.no_end_time),

    raw: event,
  };
}


function makeProgramItem(
  program,
  date
) {
  return {
    id: `program-${program.id}-${date}`,
    source_id: program.id,
    type: "PROGRAM",
    date,
    title: program.title,
    audience: program.audience,
    description: program.description,
    image_url: program.image_url,

    start_time_type:
      program.start_time_type,

    start_time_value:
      program.start_time_value,

    end_time_type:
      program.end_time_type,

    end_time_value:
      program.end_time_value,

    no_end_time:
      Boolean(program.no_end_time),

    raw: program,
  };
}


function buildEventItems(
  events,
  rangeStart,
  rangeEnd
) {
  const items = [];

  for (const event of events) {
    let dates = [];

    if (
      Array.isArray(event.dates) &&
      event.dates.length
    ) {
      dates = event.dates;
    } else if (event.day) {
      dates = [event.day];
    }

    for (const value of dates) {
      const date = parseDate(value);

      if (
        !date ||
        !isBetween(
          date,
          rangeStart,
          rangeEnd
        )
      ) {
        continue;
      }

      items.push(
        makeEventItem(
          event,
          dateKey(date)
        )
      );
    }
  }

  return items;
}


function buildWeeklyItems(
  program,
  rangeStart,
  rangeEnd
) {
  const items = [];

  const weekdays =
    Array.isArray(program.weekdays)
      ? program.weekdays
      : [];

  let current =
    new Date(rangeStart);

  while (current <= rangeEnd) {
    const matchingDay =
      weekdays.some(
        (weekday) =>
          WEEKDAY_INDEX[weekday] ===
          current.getDay()
      );

    if (
      matchingDay &&
      programAllowsDate(
        program,
        current
      )
    ) {
      items.push(
        makeProgramItem(
          program,
          dateKey(current)
        )
      );
    }

    current = addDays(
      current,
      1
    );
  }

  return items;
}


function buildEveryOtherWeekItems(
  program,
  rangeStart,
  rangeEnd
) {
  const items = [];

  const weekdays =
    Array.isArray(program.weekdays)
      ? program.weekdays
      : [];

  const anchor =
    parseDate(
      program.recurrence_start_date
    );

  if (!anchor) {
    return items;
  }

  let current =
    new Date(rangeStart);

  while (current <= rangeEnd) {
    const matchingDay =
      weekdays.some(
        (weekday) =>
          WEEKDAY_INDEX[weekday] ===
          current.getDay()
      );

    if (
      matchingDay &&
      programAllowsDate(
        program,
        current
      )
    ) {
      const dayDifference =
        Math.floor(
          (
            current.getTime() -
            anchor.getTime()
          ) /
            (
              1000 *
              60 *
              60 *
              24
            )
        );

      const weekDifference =
        Math.floor(
          dayDifference / 7
        );

      if (
        dayDifference >= 0 &&
        weekDifference % 2 === 0
      ) {
        items.push(
          makeProgramItem(
            program,
            dateKey(current)
          )
        );
      }
    }

    current = addDays(
      current,
      1
    );
  }

  return items;
}


function getNthWeekdayOfMonth(
  year,
  month,
  weekday,
  week
) {
  const weekdayIndex =
    WEEKDAY_INDEX[weekday];

  if (
    weekdayIndex === undefined
  ) {
    return null;
  }

  if (week === "LAST") {
    const lastDay =
      new Date(
        year,
        month + 1,
        0
      );

    while (
      lastDay.getDay() !==
      weekdayIndex
    ) {
      lastDay.setDate(
        lastDay.getDate() - 1
      );
    }

    return lastDay;
  }

  const weekNumbers = {
    FIRST: 1,
    SECOND: 2,
    THIRD: 3,
    FOURTH: 4,
  };

  const occurrence =
    weekNumbers[week];

  if (!occurrence) {
    return null;
  }

  const firstDay =
    new Date(
      year,
      month,
      1
    );

  const offset =
    (
      weekdayIndex -
      firstDay.getDay() +
      7
    ) % 7;

  const day =
    1 +
    offset +
    (occurrence - 1) * 7;

  const result =
    new Date(
      year,
      month,
      day
    );

  if (
    result.getMonth() !== month
  ) {
    return null;
  }

  return result;
}


function buildMonthlyItems(
  program,
  rangeStart,
  rangeEnd
) {
  const items = [];

  const patterns =
    Array.isArray(
      program.monthly_patterns
    )
      ? program.monthly_patterns
      : [];

  if (!patterns.length) {
    return items;
  }

  let monthCursor =
    new Date(
      rangeStart.getFullYear(),
      rangeStart.getMonth(),
      1
    );

  const finalMonth =
    new Date(
      rangeEnd.getFullYear(),
      rangeEnd.getMonth(),
      1
    );

  while (
    monthCursor <= finalMonth
  ) {
    const year =
      monthCursor.getFullYear();

    const month =
      monthCursor.getMonth();

    for (const pattern of patterns) {
      const occurrence =
        getNthWeekdayOfMonth(
          year,
          month,
          pattern.weekday,
          pattern.week
        );

      if (
        !occurrence ||
        !isBetween(
          occurrence,
          rangeStart,
          rangeEnd
        ) ||
        !programAllowsDate(
          program,
          occurrence
        )
      ) {
        continue;
      }

      items.push(
        makeProgramItem(
          program,
          dateKey(occurrence)
        )
      );
    }

    monthCursor =
      new Date(
        year,
        month + 1,
        1
      );
  }

  return items;
}


function buildProgramItems(
  programs,
  rangeStart,
  rangeEnd
) {
  const items = [];

  for (const program of programs) {
    let occurrences = [];

    if (
      program.recurrence_type ===
      "WEEKLY"
    ) {
      occurrences =
        buildWeeklyItems(
          program,
          rangeStart,
          rangeEnd
        );
    }

    if (
      program.recurrence_type ===
      "EVERY_OTHER_WEEK"
    ) {
      occurrences =
        buildEveryOtherWeekItems(
          program,
          rangeStart,
          rangeEnd
        );
    }

    if (
      program.recurrence_type ===
      "MONTHLY_NTH"
    ) {
      occurrences =
        buildMonthlyItems(
          program,
          rangeStart,
          rangeEnd
        );
    }

    items.push(
      ...occurrences
    );
  }

  return items;
}


export function buildCalendarItems(
  events,
  programs,
  rangeStart,
  rangeEnd
) {
  const eventItems =
    buildEventItems(
      events,
      rangeStart,
      rangeEnd
    );

  const programItems =
    buildProgramItems(
      programs,
      rangeStart,
      rangeEnd
    );

  return [
    ...eventItems,
    ...programItems,
  ].sort((a, b) => {
    if (a.date !== b.date) {
      return a.date.localeCompare(
        b.date
      );
    }

    return a.title.localeCompare(
      b.title
    );
  });
}


export function getCalendarGridRange(
  year,
  month
) {
  const firstDay =
    new Date(
      year,
      month,
      1
    );

  const lastDay =
    new Date(
      year,
      month + 1,
      0
    );

  const start =
    addDays(
      firstDay,
      -firstDay.getDay()
    );

  const end =
    addDays(
      lastDay,
      6 - lastDay.getDay()
    );

  return {
    start,
    end,
  };
}


export function getDateKey(
  date
) {
  return dateKey(date);
}