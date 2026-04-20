export type RoomStatus = "free" | "live" | "soon" | "blocked";

export type LegendItem = {
  borderColor: string;
  description: string;
  fillColor: string;
  fillImage?: string;
  label: string;
  status: RoomStatus;
};

export const raumplanLegende = {
  card: {
    backgroundColor: "#ffffff",
    borderColor: "#d4d4d8",
    title: "Legende",
    subtitle: "Hier kannst du Farben, Titel und Texte fuer den Raumplan zentral anpassen.",
  },
  items: [
    {
      status: "live",
      label: "Raum ist gerade belegt",
      description: "Aktuell laufender Termin",
      fillColor: "rgba(220, 38, 38, 0.78)",
      borderColor: "#991b1b",
    },
    {
      status: "soon",
      label: "Raum wird gleich belegt",
      description: "Naechster Termin startet in kuerze",
      fillColor: "rgba(245, 158, 11, 0.78)",
      borderColor: "#9b7819",
    },
    {
      status: "blocked",
      label: "Raum ist geblockt",
      description: "Aktueller Termin enthaelt das Wort Block",
      fillColor: "rgba(75, 85, 99, 0.88)",
      fillImage:
        "repeating-linear-gradient(135deg, rgba(255,255,255,0.32) 0px, rgba(255,255,255,0.32) 10px, transparent 10px, transparent 20px)",
      borderColor: "#111827",
    },
    {
      status: "free",
      label: "Raum ist frei",
      description: "Momentan keine Belegung",
      fillColor: "rgba(34, 197, 94, 0.78)",
      borderColor: "#15803d",
    },
  ] satisfies LegendItem[],
  overlayTexts: {
    currentLabel: "Aktuell",
    currentEventFallback: "Kein Termin",
    currentTimeFallback: "Frei",
    nextLabel: "Als Naechstes",
    nextEventFallback: "Heute nichts mehr",
    nextTimeFallback: "Frei",
  },
  pageTexts: {
    calendarErrorBookedBy: "Kalender momentan nicht erreichbar",
    calendarErrorTime: "Bitte spaeter erneut pruefen",
    freeRoomBookedBy: "Kein geplanter Termin gefunden",
    freeRoomTime: "Aktuell frei",
  },
  orientationPoint: {
    badgeBackgroundColor: "#b22222",
    badgeBorderColor: "#a70e0e",
    badgeTextColor: "#ffffff",
    dotBackgroundColor: "#dc2626",
    dotBorderColor: "#7f1d1d",
    dotShadowColor: "rgba(220, 38, 38, 0.65)",
  },
} as const;

export const defaultLegendItem: LegendItem = {
  status: "free",
  label: "Raum ist frei",
  description: "Momentan keine Belegung",
  fillColor: "rgba(34, 197, 94, 0.78)",
  borderColor: "#15803d",
};

export function getLegendItemByStatus(status: RoomStatus): LegendItem {
  return raumplanLegende.items.find((item) => item.status === status) ?? defaultLegendItem;
}

export default function RaumplanLegende() {
  return (
    <aside
      className="rounded-3xl border p-5 shadow-sm"
      style={{
        backgroundColor: raumplanLegende.card.backgroundColor,
        borderColor: raumplanLegende.card.borderColor,
      }}
    >
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-zinc-500">
        {raumplanLegende.card.title}
      </p>
      <p className="mt-2 max-w-2xl text-sm text-zinc-600">
        {raumplanLegende.card.subtitle}
      </p>

      <div className="mt-4 flex flex-wrap gap-4 items-center">
        {raumplanLegende.items.map((item) => (
          <div
            key={item.status}
            className="flex min-w-[220px] items-center gap-3 rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-3"
          >
            <span
              className="h-5 w-5 rounded-md border-2"
              style={{
                backgroundColor: item.fillColor,
                backgroundImage: item.fillImage,
                borderColor: item.borderColor,
              }}
            />
            <span className="flex flex-col">
              <span className="text-sm font-semibold text-zinc-900">{item.label}</span>
              <span className="text-xs text-zinc-600">{item.description}</span>
            </span>
          </div>
        ))}
      </div>
    </aside>
  );
}
