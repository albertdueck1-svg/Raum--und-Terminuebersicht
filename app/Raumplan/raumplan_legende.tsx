import { wayfindingPaths } from "./weg_layout";

export type RoomStatus = "free" | "live" | "soon" | "blocked" | "calendar-error";

export type LegendItem = {
  id: string;
  borderColor: string;
  description: string;
  fillColor: string;
  fillImage?: string;
  label: string;
  titelColor?: string;
  subtitleColor?: string;
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
    borderColor: "#e4e4e7",
    title: "Legende",
    titleColor: "#18181b",
    subtitle: "Damit du einen Überblick des New Home´s bekommst",
    subtitleColor: "#52525b",
  }, // Hier kann der Text eingebaut werden, der in dem Legendenbereich erscheinen soll
  items: [
    {
      id: "live",
      status: "live",
      label: "Raum ist gerade belegt",
      description: " ",
      fillColor: "#e19fa6",
      borderColor: "#e19fa6",
    },
    {
      id: "soon",
      status: "soon",
      label: "Raum wird demnächst belegt",
      description: " ",
      fillColor: "#f9bc83",
      borderColor: "#f9bc83",
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
      fillColor: "rgba(173, 190, 192, 0.82)",
      borderColor: "rgba(173, 190, 192, 0.82)",
    },
    {
      id: "free",
      status: "free",
      label: "Raum ist frei",
      description: " ",
      fillColor: "#8ae1cd",
      borderColor: "#8ae1cd",
    },
     
    {
      id: "open-area",
      status: "free",
      label: "Frei nutzbare Fläche",
      description: " ",
      fillColor: "rgba(247, 247, 247, 0.54)",
      borderColor: "#000000",
    },

        {
      id: "wc-damen/herren",
      status: "free",
      label: "Damen/Herren WC",
      description: " ",
      fillColor: "rgba(183, 171, 217, 0.82)",
      borderColor: "rgba(183, 171, 217, 0.82)",
    },
    //         {
    //   id: "wc-herren",
    //   status: "free",
    //   label: "Herren WC",
    //   description: " ",
    //   fillColor: "#CFFF48",
    //   borderColor: "#A6D02f",
    // },
            {
      id: "wc-behinderten",
      status: "free",
      label: "Behinderten WC",
      description: " ",
      fillColor: "rgba(139, 121, 188, 0.82)",
      borderColor: "rgba(139, 121, 188, 0.82)",
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
    badgeBackgroundColor: "#2563eb",
    badgeBorderColor: "#1d4ed8",
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
      className="rounded-2xl border p-3 shadow-sm"
      style={{
        backgroundColor: raumplanLegende.card.backgroundColor,
        borderColor: raumplanLegende.card.borderColor,
      }}
    >
      <p
        className="text-xs font-semibold uppercase tracking-[0.16em]"
        style={{
          color: raumplanLegende.card.titleColor,
        }}
      >
        {raumplanLegende.card.title}
      </p>
      <p
        className="mt-1 max-w-2xl text-xs"
        style={{
          color: raumplanLegende.card.subtitleColor,
        }}
      >
        {raumplanLegende.card.subtitle}
      </p>

      <div className="mt-3 flex flex-wrap gap-2">
        {raumplanLegende.items.map((item) => (
          <div
            key={item.id}
            className="flex min-w-[180px] items-center gap-2 rounded-xl border border-zinc-200 bg-zinc-50 px-3 py-2"
          >
            {item.preview === "wayfinding" ? (
              <svg
                aria-hidden="true"
                className="h-4 w-8 shrink-0"
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
                className="h-4 w-4 shrink-0 rounded border-2"
                style={{
                  backgroundColor: item.fillColor,
                  backgroundImage: item.fillImage,
                  borderColor: item.borderColor,
                }}
              />
            )}
            <span className="flex flex-col">
              <span className="text-xs font-semibold text-zinc-900">{item.label}</span>
              <span className="text-[11px] text-zinc-600">{item.description}</span>
            </span>
          </div>
        ))}
      </div>
    </aside>
  );
}
