import { wayfindingPaths } from "./weg_layout";

export type RoomStatus = "free" | "live" | "soon" | "blocked" | "calendar-error";

export type LegendItem = {
  id: string;
  borderColor: string;
  description: string;
  fillColor: string;
  fillImage?: string;
  label: string;
  preview?: "swatch" | "wayfinding";
  status: RoomStatus;
};

const defaultWayfindingStyle = {
  color: wayfindingPaths[0]?.color ?? "#2563eb",
  strokeDasharray: wayfindingPaths[0]?.strokeDasharray ?? "18 12",
  strokeWidth: wayfindingPaths[0]?.strokeWidth ?? 10,
};

export const raumplanLegende = {      
  card: {                                   
    backgroundColor: "#ffffff",
    borderColor: "#d4d4d8",
    title: "Legende",
    subtitle: "Damit du eine Überblick des New Home´s bekommst",
  }, // Hier kann der Text eingebaut werden, der in dem Legendenbereich erscheinen soll
  items: [
    {
      id: "live",
      status: "live",
      label: "Raum ist gerade belegt",
      description: " ",
      fillColor: "rgba(220, 38, 38, 0.78)",
      borderColor: "#991b1b",
    },
    {
      id: "soon",
      status: "soon",
      label: "Raum wird gleich belegt",
      description: " ",
      fillColor: "rgba(245, 158, 11, 0.78)",
      borderColor: "#9b7819",
    },
    {
      id: "blocked",
      status: "blocked",
      label: "Raum ist geblockt",
      description: " ",
      fillColor: "rgba(75, 85, 99, 0.88)",
      fillImage:
        "repeating-linear-gradient(135deg, rgba(255,255,255,0.32) 0px, rgba(255,255,255,0.32) 10px, transparent 10px, transparent 20px)",
      borderColor: "#111827",
    },
    {
      id: "calendar-error",
      status: "calendar-error",
      label: "Kalender nicht erreichbar",
      description: " ",
      fillColor: "rgba(78, 222, 233, 0.82)",
      borderColor: "#7c3aed",
    },
    {
      id: "free",
      status: "free",
      label: "Raum ist frei",
      description: " ",
      fillColor: "rgba(34, 197, 94, 0.78)",
      borderColor: "#15803d",
    },
     
    {
      id: "open-area",
      status: "free",
      label: "Frei nutzbare Fläche",
      description: " ",
      fillColor: "rgba(251, 191, 36, 0.22)",
      borderColor: "#d97706",
    },

        {
      id: "wc-damen",
      status: "free",
      label: "Damen WC",
      description: " ",
      fillColor: "rgba(227, 93, 189, 0.3)",
      borderColor: "rgba(227, 93, 189, 0.3)",
    },
            {
      id: "wc-herren",
      status: "free",
      label: "Herren WC",
      description: " ",
      fillColor: "rgba(58, 149, 223, 0.22)",
      borderColor: "rgba(58, 149, 223, 0.22)",
    },
            {
      id: "wc-behinderten",
      status: "free",
      label: "Behinderten WC",
      description: " ",
      fillColor: "rgba(58, 223, 215, 0.22)",
      borderColor: "rgba(58, 223, 215, 0.22)",
    },

      {
      id: "wayfinding",
      status: "free",
      label: "Weg zu den Buchbaren Räumen",
      description: "",
      fillColor: "#2563eb",
      borderColor: "#2563eb",
      preview: "wayfinding",
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
  id: "default-free",
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

      <div className="mt-4 flex flex-wrap gap-4">
        {raumplanLegende.items.map((item) => (
          <div
            key={item.id}
            className="flex min-w-[220px] items-center gap-3 rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-3"
          >
            {item.preview === "wayfinding" ? (
              <svg
                aria-hidden="true"
                className="h-5 w-10 shrink-0"
                viewBox="0 0 40 20"
              >
                <polyline
                  fill="none"
                  points="3,10 18,10 18,5 32,5"
                  stroke={defaultWayfindingStyle.color}
                  strokeDasharray={defaultWayfindingStyle.strokeDasharray}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={Math.max(2, defaultWayfindingStyle.strokeWidth / 3)}
                />
                <circle
                  cx="32"
                  cy="5"
                  fill={defaultWayfindingStyle.color}
                  r={Math.max(2, defaultWayfindingStyle.strokeWidth / 5)}
                />
              </svg>
            ) : (
              <span
                className="h-5 w-5 shrink-0 rounded-md border-2"
                style={{
                  backgroundColor: item.fillColor,
                  backgroundImage: item.fillImage,
                  borderColor: item.borderColor,
                }}
              />
            )}
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
