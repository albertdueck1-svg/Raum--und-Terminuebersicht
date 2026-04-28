import { NextResponse } from "next/server";

// Hier werden die externen Kalender pro Raum hinterlegt.
// Neuen Raum hinzufügen: Schlüssel hier muss exakt zum `name` in `raumplan_positions.ts` passen.
const roomCalendars = {

  // Link bereits hinterelgt. 
  Arena: {
    htmlUrl:
      "https://outlook.office365.com/owa/calendar/e54d3464217043c8abb086f0138a2564@icf-muenchen.de/1d997f574cf9473bad95301e7552e19817229548763220775816/calendar.html",
    icsUrl:
      "https://outlook.office365.com/owa/calendar/e54d3464217043c8abb086f0138a2564@icf-muenchen.de/1d997f574cf9473bad95301e7552e19817229548763220775816/calendar.ics",
  },
// Link bereits hinterelgt.
  Skyline: {
    htmlUrl:
      "https://outlook.office365.com/owa/calendar/419e01acd6b1449998ced90287e07e8b@icf-muenchen.de/ea4a947055b649e7b1dd601f77babe7014410306608822361486/calendar.html",    
    
    icsUrl:
      "https://outlook.office365.com/owa/calendar/419e01acd6b1449998ced90287e07e8b@icf-muenchen.de/ea4a947055b649e7b1dd601f77babe7014410306608822361486/calendar.ics",
  },

  Studio: {
    htmlUrl:
      "https://outlook.office365.com/owa/calendar/6d5c09983e874642bbee91097d790425@icf-muenchen.de/16f5967f4846402f9694f0b8ac97ea674908797125207886521/calendar.html",    
    
    icsUrl:
      "https://outlook.office365.com/owa/calendar/6d5c09983e874642bbee91097d790425@icf-muenchen.de/16f5967f4846402f9694f0b8ac97ea674908797125207886521/calendar.ics",
  },
// Link bereits hinterelgt. 
  Chiemsee: {
    htmlUrl:
      "https://outlook.office365.com/owa/calendar/ec8713bd577245fe88ecd9588239143b@icf-muenchen.de/40b6d5190560480f81a4ba79a3a190c212054924150702254051/calendar.html",    
    
    icsUrl:
      "https://outlook.office365.com/owa/calendar/ec8713bd577245fe88ecd9588239143b@icf-muenchen.de/40b6d5190560480f81a4ba79a3a190c212054924150702254051/calendar.ics",
  },
// Link bereits hinterelgt.
Englischergarten: {
    htmlUrl:
      "https://outlook.office365.com/owa/calendar/32d9696c84d54c618ce534c1dec1b171@icf-muenchen.de/9251124d88d3447f89c3de5b8d8893cd9341871830396817843/calendar.html",    
    
    icsUrl:
      "https://outlook.office365.com/owa/calendar/32d9696c84d54c618ce534c1dec1b171@icf-muenchen.de/9251124d88d3447f89c3de5b8d8893cd9341871830396817843/calendar.ics",
  },
// Link bereits hinterelgt. 
 Zugspitze: {
    htmlUrl:
      "https://outlook.office365.com/owa/calendar/d51530f207a746ebbce548ce6c82d2bf@icf-muenchen.de/3aa725071531458da5f3f682f9c6d9ac9406819668955287699/calendar.html",    
    
    icsUrl:
      "https://outlook.office365.com/owa/calendar/d51530f207a746ebbce548ce6c82d2bf@icf-muenchen.de/3aa725071531458da5f3f682f9c6d9ac9406819668955287699/calendar.ics",
  },
// Link bereits hinterelgt.
 Glasraum: {
    htmlUrl:
      "https://outlook.office365.com/owa/calendar/5c8828e18c48489d9f2b938653563a56@icf-muenchen.de/e1fb0596433c4e15808511e3f145cdee3640350189164767362/calendar.html",    
    
    icsUrl:
      "https://outlook.office365.com/owa/calendar/5c8828e18c48489d9f2b938653563a56@icf-muenchen.de/e1fb0596433c4e15808511e3f145cdee3640350189164767362/calendar.ics",
  },
  // Link bereits hinterelgt. 
 Alm: {
    htmlUrl:
      "https://outlook.office365.com/owa/calendar/576a5300f7e84403aae1d258a9934ea8@icf-muenchen.de/0ce0ac54f06c4ef09b8f42afc26db90b17351704295844869107/calendar.html",    
    
    icsUrl:
      "https://outlook.office365.com/owa/calendar/576a5300f7e84403aae1d258a9934ea8@icf-muenchen.de/0ce0ac54f06c4ef09b8f42afc26db90b17351704295844869107/calendar.ics",
  },
  // Link bereits hinterelgt. 
Eisbach: {
    htmlUrl:
      "https://outlook.office365.com/owa/calendar/1d4ce9aa00d5413286a95cf82b5cec8b@icf-muenchen.de/d5685f5ecff34ce6894193385622906615264024369445193537/calendar.html",    
    
    icsUrl:
      "https://outlook.office365.com/owa/calendar/1d4ce9aa00d5413286a95cf82b5cec8b@icf-muenchen.de/d5685f5ecff34ce6894193385622906615264024369445193537/calendar.ics",
  },
  // Link bereits hinterelgt.
Olympiaturm: {
    htmlUrl:
      "https://outlook.office365.com/owa/calendar/95f889c4bed04370a4088d2f6befe54f@icf-muenchen.de/aba67f821cdb4ed2872d8fd63fd2d4b714578888659414497673/calendar.html",    
    
    icsUrl:
      "https://outlook.office365.com/owa/calendar/95f889c4bed04370a4088d2f6befe54f@icf-muenchen.de/aba67f821cdb4ed2872d8fd63fd2d4b714578888659414497673/calendar.ics",
  },
  // Link bereits hinterelgt.
  Marienplatz: {
    htmlUrl:
      "https://outlook.office365.com/owa/calendar/6f15e69c590343a4a2abdaff2e5bb7e9@icf-muenchen.de/52540d3a8d7b48b697b8a49323db5dd2424867050582859894/calendar.html",    
    
    icsUrl:
      "https://outlook.office365.com/owa/calendar/6f15e69c590343a4a2abdaff2e5bb7e9@icf-muenchen.de/52540d3a8d7b48b697b8a49323db5dd2424867050582859894/calendar.ics",
  },

} as const;

type CalendarEvent = {
  end: Date;
  start: Date;
  summary: string;
};

type SelectedEvent = {
  status: "live" | "upcoming";
  summary: string;
  time: string;
};

type DisplayEvent = {
  status: "finished" | "live" | "upcoming";
  summary: string;
  time: string;
};

function unfoldIcsLines(icsText: string) {
  // ICS-Dateien duerfen Zeilen umbrechen; fuer das Parsen fuehren wir sie wieder zusammen.
  return icsText.replace(/\r?\n[ \t]/g, "");
}

function parseIcsDate(value: string) {
  // Outlook/iCloud liefern Datumswerte in verschiedenen ICS-Formaten.
  if (/^\d{8}T\d{6}Z$/.test(value)) {
    const year = Number(value.slice(0, 4));
    const month = Number(value.slice(4, 6)) - 1;
    const day = Number(value.slice(6, 8));
    const hour = Number(value.slice(9, 11));
    const minute = Number(value.slice(11, 13));
    const second = Number(value.slice(13, 15));

    return new Date(Date.UTC(year, month, day, hour, minute, second));
  }

  if (/^\d{8}T\d{6}$/.test(value)) {
    const year = Number(value.slice(0, 4));
    const month = Number(value.slice(4, 6)) - 1;
    const day = Number(value.slice(6, 8));
    const hour = Number(value.slice(9, 11));
    const minute = Number(value.slice(11, 13));
    const second = Number(value.slice(13, 15));

    return new Date(year, month, day, hour, minute, second);
  }

  if (/^\d{8}$/.test(value)) {
    const year = Number(value.slice(0, 4));
    const month = Number(value.slice(4, 6)) - 1;
    const day = Number(value.slice(6, 8));

    return new Date(year, month, day);
  }

  return null;
}

function extractValue(line: string) {
  return line.slice(line.indexOf(":") + 1).replace(/\\,/g, ",").replace(/\\n/g, " ");
}

function parseCalendarEvents(icsText: string) {
  // Wir lesen nur die Basisdaten eines Termins aus: Start, Ende und Titel.
  const lines = unfoldIcsLines(icsText).split(/\r?\n/);
  const events: CalendarEvent[] = [];
  let currentEvent: Partial<CalendarEvent> | null = null;

  for (const line of lines) {
    if (line === "BEGIN:VEVENT") {
      currentEvent = {};
      continue;
    }

    if (line === "END:VEVENT") {
      if (
        currentEvent?.start instanceof Date &&
        currentEvent?.end instanceof Date &&
        typeof currentEvent.summary === "string"
      ) {
        events.push(currentEvent as CalendarEvent);
      }
      currentEvent = null;
      continue;
    }

    if (!currentEvent) {
      continue;
    }

    if (line.startsWith("DTSTART")) {
      const start = parseIcsDate(extractValue(line));
      if (start) {
        currentEvent.start = start;
      }
    }

    if (line.startsWith("DTEND")) {
      const end = parseIcsDate(extractValue(line));
      if (end) {
        currentEvent.end = end;
      }
    }

    if (line.startsWith("SUMMARY")) {
      currentEvent.summary = extractValue(line);
    }
  }

  return events.sort((a, b) => a.start.getTime() - b.start.getTime());
}

function formatTimeRange(start: Date, end: Date) {
  const formatter = new Intl.DateTimeFormat("de-DE", {
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "Europe/Berlin",
  });

  return `${formatter.format(start)}-${formatter.format(end)}`;
}

function isSameBerlinDay(date: Date, reference: Date) {
  // Vergleicht zwei Zeitpunkte nach Berliner Datum statt nach UTC.
  const dateParts = new Intl.DateTimeFormat("en-CA", {
    day: "2-digit",
    month: "2-digit",
    timeZone: "Europe/Berlin",
    year: "numeric",
  }).format(date);
  const referenceParts = new Intl.DateTimeFormat("en-CA", {
    day: "2-digit",
    month: "2-digit",
    timeZone: "Europe/Berlin",
    year: "numeric",
  }).format(reference);

  return dateParts === referenceParts;
}

async function loadCalendar(icsUrl: string) {
  // Holt den Kalender live und berechnet daraus den aktuellen, den naechsten und alle heutigen Termine.
  const response = await fetch(icsUrl, {
    cache: "no-store",
    headers: {
      Accept: "text/calendar",
    },
  });

  if (!response.ok) {
    throw new Error(`ICS request failed with status ${response.status}`);
  }

  const icsText = await response.text();
  const events = parseCalendarEvents(icsText);
  const now = new Date();
  const todayEventsRaw = events.filter((event) => isSameBerlinDay(event.start, now));
  const currentEvent =
    todayEventsRaw.find((event) => event.start <= now && event.end >= now) ?? null;
  const nextEvent = todayEventsRaw.find((event) => event.start > now) ?? null;
  const selectedEvent = currentEvent ?? nextEvent;
  const minutesUntilNextEvent = nextEvent
    ? Math.max(0, Math.ceil((nextEvent.start.getTime() - now.getTime()) / 60000))
    : null;
  const todayEvents = todayEventsRaw
    .filter((event) => event.end >= now)
    .map((event) => ({
      summary: event.summary,
      time: formatTimeRange(event.start, event.end),
      status:
        event.start <= now && event.end >= now
          ? "live"
          : event.start > now
            ? "upcoming"
            : "finished",
    } satisfies DisplayEvent));

  return {
    currentEvent: currentEvent
      ? {
          summary: currentEvent.summary,
          time: formatTimeRange(currentEvent.start, currentEvent.end),
        }
      : null,
    nextEvent: nextEvent
      ? {
          minutesUntilStart: minutesUntilNextEvent,
          summary: nextEvent.summary,
          time: formatTimeRange(nextEvent.start, nextEvent.end),
        }
      : null,
    selectedEvent: selectedEvent
      ? {
          summary: selectedEvent.summary,
          time: formatTimeRange(selectedEvent.start, selectedEvent.end),
          status: currentEvent ? "live" : "upcoming",
        }
      : null,
    todayEvents,
  };
}

export async function GET() {
  // Laedt alle konfigurierten Raumkalender parallel und liefert sie gesammelt ans Frontend.
  const entries = await Promise.all(
    Object.entries(roomCalendars).map(async ([roomName, config]) => {
      try {
        const calendar = await loadCalendar(config.icsUrl);

        return [
          roomName,
          {
            ...calendar,
            error: false,
            htmlUrl: config.htmlUrl,
          },
        ] as const;
      } catch (error) {
        console.error(`${roomName} calendar fetch failed`, error);

        return [
          roomName,
          {
            currentEvent: null,
            nextEvent: null,
            selectedEvent: null,
            todayEvents: [],
            error: true,
            htmlUrl: config.htmlUrl,
          },
        ] as const;
      }
    }),
  );

  return NextResponse.json(Object.fromEntries(entries) as Record<string, {
    currentEvent: { summary: string; time: string } | null;
    error: boolean;
    htmlUrl: string;
    nextEvent: { minutesUntilStart: number | null; summary: string; time: string } | null;
    selectedEvent: SelectedEvent | null;
    todayEvents: DisplayEvent[];
  }>);
}
