"use client";

import dynamic from "next/dynamic";
import Link from "next/link";             // Interne Verlinkung mit Next.js Link-Komponente
import { useEffect, useState } from "react";
import RaumplanLegende, { raumplanLegende } from "./raumplan_legende";
import { leereRaeume } from "./leere_raeume";
import {
  baseRooms,
  orientationPoint,
  type RoomBase,
} from "./raumplan_positions";
import { wayfindingPaths } from "./weg_layout";

const RaumplanPdfViewer = dynamic(() => import("./raumplan_pdf_viewer"), {
  loading: () => (
    <div className="overflow-auto rounded-3xl bg-white p-4 shadow-sm ring-1 ring-zinc-200">
      <div className="flex min-h-[480px] items-center justify-center rounded-2xl border border-dashed border-zinc-300 text-sm text-zinc-500">
        Lageplan wird geladen...
      </div>
    </div>
  ),
  ssr: false,
});

type RoomCalendarData = {                                                                                 // Daten aus dem Kalender-ICS, aufbereitet fuer die Anzeige im Lageplan
  currentEvent: { summary: string; time: string } | null;                                                 // Aktuell laufender Termin, falls vorhanden
  error: boolean;                                                                                         // Fehler beim Laden des Kalenders
  htmlUrl: string;
  nextEvent: { minutesUntilStart: number | null; summary: string; time: string } | null;
  selectedEvent: { status: "live" | "upcoming"; summary: string; time: string } | null;
  todayEvents: {
    status: "finished" | "live" | "upcoming";
    summary: string;
    time: string;
  }[];
};

type RoomCalendarsResponse = Record<string, RoomCalendarData>;   // Antwortstruktur der API, die die Kalenderdaten für alle Räume enthält, wobei der Schlüssel der Raumname ist und der Wert die Kalenderdaten für diesen Raum sind

function isBlockedEvent(summary: string | null | undefined) {
  return typeof summary === "string" && summary.toLowerCase().includes("block");
}

function mergeRoomCalendars(
  rooms: RoomBase[],
  calendars: RoomCalendarsResponse | null,
): RoomBase[] {     // Funktion, die die Basisraumdaten mit den Kalenderdaten zusammenfuehrt, um die finalen Anzeigeinformationen fuer den Lageplan zu erstellen  
  return rooms.map((room) => {                                                            // Sucht die Kalenderdaten fuer den aktuellen Raum und aktualisiert die Anzeigeinformationen basierend auf dem Status der Termine (aktuell, bald, frei)
    const calendar = calendars?.[room.name];                                              // Holt die Kalenderdaten fuer den aktuellen Raum, falls vorhanden  

    if (!calendar) {                                                                  // Falls keine Kalenderdaten gefunden wurden, wird der Raum mit einem Fehlerstatus angezeigt
      return {
        ...room,
        bookedBy: raumplanLegende.pageTexts.calendarErrorBookedBy,
        status: "calendar-error",
        time: raumplanLegende.pageTexts.calendarErrorTime,
        timeClassName: "text-[8px]",
      };
    }

    if (calendar.error) {                                                         // Falls ein Fehler beim Laden des Kalenders aufgetreten ist, wird der Raum mit einem Fehlerstatus angezeigt
      return {
        ...room,
        bookedBy: raumplanLegende.pageTexts.calendarErrorBookedBy,
        status: "calendar-error",
        time: raumplanLegende.pageTexts.calendarErrorTime,
        timeClassName: "text-[8px]",                                        // Noch kleinere Schrift, da die Fehlermeldung laenger ist als typische Zeitangaben
      };
    }

    if (calendar.currentEvent) {
      return {
        ...room,
        bookedBy: calendar.currentEvent.summary,
        status: isBlockedEvent(calendar.currentEvent.summary) ? "blocked" : "live",
        time: calendar.currentEvent.time,
      };
    }

    if (                                                                        // Wenn kein aktueller Termin, aber ein naechster Termin innerhalb der naechsten 15 Minuten bevorsteht, wird der Raum mit einem "soon"-Status angezeigt, um die bevorstehende Buchung hervorzuheben
      calendar.nextEvent &&                                                     // Prueft, ob ein naechster Termin vorhanden ist
      calendar.nextEvent.minutesUntilStart !== null &&                          // Prueft, ob die Information zur verbleibenden Zeit bis zum naechsten Termin vorhanden ist
      calendar.nextEvent.minutesUntilStart <= 15                                // Prueft, ob der naechste Termin in 15 Minuten oder weniger beginnt, um den "soon"-Status zu setzen
    ) {
      return {
        ...room,
        bookedBy: calendar.nextEvent.summary,
        status: "soon",
        time: calendar.nextEvent.time,
      };
    }

    if (!calendar.selectedEvent) {
      return {
        ...room,
        bookedBy: raumplanLegende.pageTexts.freeRoomBookedBy,
        status: "free",
        time: raumplanLegende.pageTexts.freeRoomTime,
        timeClassName: "text-[12px]",                      // Kleinere Schrift, da "Aktuell frei" laenger ist als typische Zeitangaben
      };
    }

    return {
      ...room,
      bookedBy: calendar.selectedEvent.summary,
      status: "free",
      time: calendar.selectedEvent.time,
    };
  });
}

export default function RaumplanPage() {
  const [roomCalendars, setRoomCalendars] = useState<RoomCalendarsResponse | null>(null);
  useEffect(() => {
    let isMounted = true;

    async function loadRoomCalendars() {
      try {
        const response = await fetch("/api/room-calendars", {
          cache: "no-store",
        });

        if (!response.ok) {
          throw new Error(`Calendar request failed with status ${response.status}`);
        }

        const data = (await response.json()) as RoomCalendarsResponse;

        if (isMounted) {
          setRoomCalendars(data);
        }
      } catch (error) {
        console.error("Room calendars could not be loaded", error);
      }
    }

    loadRoomCalendars();
    const intervalId = window.setInterval(loadRoomCalendars, 3000); // Aktualisierung alle 3 Sekunden aktualisieren

    return () => {
      isMounted = false;
      window.clearInterval(intervalId);
    };
  }, []);

  const roomsWithCalendars: RoomBase[] = mergeRoomCalendars(baseRooms, roomCalendars); // Zusammenfuehren der Basisraumdaten mit den Kalenderdaten, um die finalen Anzeigeinformationen fuer den Lageplan zu erstellen
  const rooms: RoomBase[] = [...roomsWithCalendars, ...leereRaeume];

  return (                                           // Hauptlayout der Seite mit dem Lageplan und den Raumstatusinformationen, die alle 3 Sekunden aktualisiert werden
    <main className="min-h-screen bg-zinc-100 px-6 py-10 text-zinc-900">
      <div className="mx-auto flex max-w-[3000px] flex-col gap-6">                 {/*Layout-Breite von max-w-6xl auf max-w-7xl, in dem Sich das PDF befindet*/}
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
              Interaktiver Lageplan
            </p>
            <h1 className="mt-2 text-3xl font-bold">ICF New Home</h1>
            
          </div>
          <Link
            href="/"
            className="rounded-full border border-zinc-300 px-4 py-2 text-sm font-semibold text-zinc-700 transition hover:bg-white"
          >
            Zur Startseite
          </Link>
        </div>

        

        <section>
          <RaumplanPdfViewer
            orientationPoint={orientationPoint}
            roomCalendars={roomCalendars}
            rooms={rooms}
            wayfindingPaths={wayfindingPaths}
          />
        </section>
        <RaumplanLegende />
      </div>
    </main>
  );
}
