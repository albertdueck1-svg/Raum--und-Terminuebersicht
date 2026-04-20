export type EventNameVisibilityRule = {
  endTime: string;
  hideBookedBy?: boolean;
  hideCurrentEventName?: boolean;
  hideNextEventName?: boolean;
  startTime: string;
  weekdays: number[];
};

export type RoomBase = {
  bookedBy: string;
  bookedByFontSize?: string;
  bookedByVisibilityRules?: EventNameVisibilityRule[];
  contentOrder?: Array<"name" | "bookedBy" | "time">;     // Mit contentOrder kannst du die Reihenfolge von Raumname, gebucht von und Zeit steuern. Standard ist name - bookedBy - time.
  height: number;
  id: string;
  labelBackgroundColor?: string;
  labelBorderColor?: string;
  labelColor?: string;
  labelOffsetX?: number;
  labelOffsetY?: number;
  labelPosition?: "inside" | "right";
  left: number;
  name: string;
  nameFontSize?: string;
  nameClassName?: string;
  overlayGroundColor?: string;
  overlayInfoFontSize?: string;
  overlayInfoLabelFontSize?: string;
  overlayBorderColor?: string;
  overlayBorderWidth?: string;
  showCalendarInfo?: boolean;
  status: "free" | "live" | "soon" | "blocked";
  time: string;
  timeClassName?: string;
  timeFontSize?: string;
  top: number;
  width: number;
};

export type OrientationPoint = {
  label: string;
  labelBackgroundColor?: string;
  labelBorderColor?: string;
  labelColor?: string;
  labelOffsetX?: number;
  labelOffsetY?: number;
  labelPosition?: "inside" | "right";
  nameFontSize?: string;
  left: number;
  top: number;
};

export type WayfindingPoint = {
  left: number;
  top: number;
};

export type WayfindingPath = {
  color?: string;
  id: string;
  label?: string;
  points: WayfindingPoint[];
  strokeDasharray?: string;
  strokeWidth?: number;
};

// Hier pflegst du die Raeume mit Kalender-Anbindung.
// Neuen Raum hinzufügen: `name` muss exakt zu einem Schlüssel in `app/api/room-calendars/route.ts` passen.
// Optional: Mit `labelPosition: "right"` kannst du den Namen neben dem Overlay anzeigen.
// Optional: `nameFontSize`, `labelColor`, `labelBackgroundColor` und `labelBorderColor` steuern jede Beschriftung einzeln.
// Optional: `overlayBorderColor` und `overlayBorderWidth` steuern den Rahmen pro Raum einzeln.
// Optional: `overlayGroundColor` setzt eine eigene Fuellung, z. B. `rgba(255, 255, 255, 0.08)` fuer ein fast transparentes Overlay.
// Optional: `showCalendarInfo: false` blendet den Kalenderblock aus, sodass nur der Raumname angezeigt wird.
// Optional: `contentOrder` steuert die Reihenfolge von Raumname, Terminname und Zeit pro Raum.
// Optional: `bookedByVisibilityRules` blendet Terminnamen je Raum nach Wochentag und Uhrzeit aus.
export const baseRooms: RoomBase[] = [
  {
    id: "raum-a",
    name: "Arena",
    contentOrder: ["name", "bookedBy", "time"],
    nameClassName: "text-[10px]",
    nameFontSize: "30px",
    bookedBy: "Kalender wird geladen...",
    bookedByFontSize: "25px",
    labelBackgroundColor: "#ffffff",
    labelBorderColor: "#d4d4d8",
    labelColor: "#18181b",
    labelPosition: "inside",
    labelOffsetX: 12,
    labelOffsetY: 12,
    bookedByVisibilityRules: [      // Beispielregel: Am Wochenende blendet die Arena den Namen der buchenden Person aus und zeigt nur die Uhrzeit an.
      {
        weekdays: [1, 2, 3, 4], // Montag bis Donnerstag
        startTime: "6:00",
        endTime: "18:30",
        hideBookedBy: true,
        hideCurrentEventName: true,
        hideNextEventName: true,
      },
       {
        weekdays: [5], // Freitag
        startTime: "6:00",
        endTime: "11:30",
        hideBookedBy: true,
        hideCurrentEventName: true,
        hideNextEventName: true,
      },
       {
        weekdays: [0], // Sonntag
        startTime: "14:00",
        endTime: "23:59",
        hideBookedBy: true,
        hideCurrentEventName: true,
        hideNextEventName: true,
      },
    ],
    // overlayGroundColor: "#0e3bb6",       //Rahmenfarbe pro Raum, wenn man sie von der Füllfarbe unterscheiden möchte. Aktuell nicht genutzt, da die meisten Räume einen transparenten Hintergrund haben, damit man die PDF-Details darunter sehen kann. Wenn du eine Rahmenfarbe angibst, solltest du auch eine `overlayBorderWidth` angeben, damit der Rahmen sichtbar wird.
    // overlayBorderColor: "#2a56ce",
    // overlayBorderWidth: "35px",
    overlayInfoFontSize: "15px",
    overlayInfoLabelFontSize: "25px",     //  Die Schriftgröße der Labels "Aktuell" und "Als Nächstes" in den Infoblöcken.
    status: "free",
    time: "--:--",
    timeClassName: "text-[10px]",
    timeFontSize: "20px",
    top: 687,
    left: 1175,
    width: 430,
    height: 448,
  },
  {
    id: "raum-h",
    name: "Englischergarten",
    contentOrder: ["name", "time"],
    nameClassName: "text-[10px]",
    nameFontSize: "30px",
    bookedBy: "Kalender wird geladen...",
    labelBackgroundColor: "#ffffff",
    labelBorderColor: "#d4d4d8",
    labelColor: "#18181b",
    labelPosition: "inside",
    labelOffsetX: 12,
    labelOffsetY: 12,
    bookedByVisibilityRules: [      // Beispielregel: Am Wochenende blendet die Arena den Namen der buchenden Person aus und zeigt nur die Uhrzeit an.
      {
        weekdays: [1, 2, 3, 4], // Montag bis Donnerstag
        startTime: "6:00",
        endTime: "18:30",
        hideBookedBy: true,
        hideCurrentEventName: true,
        hideNextEventName: true,
      },
       {
        weekdays: [5], // Freitag
        startTime: "6:00",
        endTime: "11:30",
        hideBookedBy: true,
        hideCurrentEventName: true,
        hideNextEventName: true,
      },
       {
        weekdays: [0], // Sonntag
        startTime: "14:00",
        endTime: "23:59",
        hideBookedBy: true,
        hideCurrentEventName: true,
        hideNextEventName: true,
      },
    ],
    status: "free",
    time: "--:--",
    timeClassName: "text-[10px]",
    timeFontSize: "20px",
    top: 1144,
    left: 1175,
    width: 296,
    height: 292,
  },
  {
    id: "raum-f",
    name: "Chiemsee",
    contentOrder: ["name", "time"],
    nameClassName: "text-[10px]",
    nameFontSize: "30px",
    bookedBy: "Kalender wird geladen...",
    labelBackgroundColor: "#ffffff",
    labelBorderColor: "#d4d4d8",
    labelColor: "#18181b",
    labelPosition: "inside",
    labelOffsetX: 12,
    labelOffsetY: 12,
    bookedByVisibilityRules: [      // Beispielregel: Am Wochenende blendet die Arena den Namen der buchenden Person aus und zeigt nur die Uhrzeit an.
      {
        weekdays: [1, 2, 3, 4], // Montag bis Donnerstag
        startTime: "6:00",
        endTime: "18:30",
        hideBookedBy: true,
        hideCurrentEventName: true,
        hideNextEventName: true,
      },
       {
        weekdays: [5], // Freitag
        startTime: "6:00",
        endTime: "11:30",
        hideBookedBy: true,
        hideCurrentEventName: true,
        hideNextEventName: true,
      },
       {
        weekdays: [0], // Sonntag
        startTime: "14:00",
        endTime: "23:59",
        hideBookedBy: true,
        hideCurrentEventName: true,
        hideNextEventName: true,
      },
    ],
    status: "free",
    time: "--:--",
    timeClassName: "text-[10px]",
    top: 1438,
    left: 1175,
    width: 296,
    height: 250,  
  },
  {
    id: "raum-e",
    name: "Eisbach",
    contentOrder: ["name", "time"],
    nameClassName: "text-[10px]",
    nameFontSize: "20px",
    bookedBy: "Kalender wird geladen...",
    labelBackgroundColor: "#f8f8f8",
    labelBorderColor: "#000000",
    labelColor: "hsl(240, 18%, 3%)",
    labelPosition: "right",
    labelOffsetX: -143,
    labelOffsetY: 12,
    bookedByVisibilityRules: [      // Beispielregel: Am Wochenende blendet die Arena den Namen der buchenden Person aus und zeigt nur die Uhrzeit an.
      {
        weekdays: [1, 2, 3, 4], // Montag bis Donnerstag
        startTime: "6:00",
        endTime: "18:30",
        hideBookedBy: true,
        hideCurrentEventName: true,
        hideNextEventName: true,
      },
       {
        weekdays: [5], // Freitag
        startTime: "6:00",
        endTime: "11:30",
        hideBookedBy: true,
        hideCurrentEventName: true,
        hideNextEventName: true,
      },
       {
        weekdays: [0], // Sonntag
        startTime: "14:00",
        endTime: "23:59",
        hideBookedBy: true,
        hideCurrentEventName: true,
        hideNextEventName: true,
      },
    ],
    overlayInfoFontSize: "8px",
    overlayInfoLabelFontSize: "8px",     //  Die Schriftgröße der Labels "Aktuell" und "Als Nächstes" in den Infoblöcken.
    status: "free",
    time: "--:--",
    timeClassName: "text-[10px]",
    top: 329,
    left: 830,
    width: 45,
    height: 63,
  },
 {
    id: "raum-k",
    name: "Olympiaturm",
    contentOrder: ["name", "time"],
    nameClassName: "text-[10px]",
    nameFontSize: "20px",
    bookedBy: "Kalender wird geladen...",
    labelBackgroundColor: "#ffffff",
    labelBorderColor: "#010101",
    labelColor: "hsl(240, 18%, 3%)",
    labelPosition: "right",
    labelOffsetX: -190,
    labelOffsetY: 12,
    bookedByVisibilityRules: [      // Beispielregel: Am Wochenende blendet die Arena den Namen der buchenden Person aus und zeigt nur die Uhrzeit an.
      {
        weekdays: [1, 2, 3, 4], // Montag bis Donnerstag
        startTime: "6:00",
        endTime: "18:30",
        hideBookedBy: true,
        hideCurrentEventName: true,
        hideNextEventName: true,
      },
       {
        weekdays: [5], // Freitag
        startTime: "6:00",
        endTime: "11:30",
        hideBookedBy: true,
        hideCurrentEventName: true,
        hideNextEventName: true,
      },
       {
        weekdays: [0], // Sonntag
        startTime: "14:00",
        endTime: "23:59",
        hideBookedBy: true,
        hideCurrentEventName: true,
        hideNextEventName: true,
      },
    ],
    overlayInfoFontSize: "8px",
    overlayInfoLabelFontSize: "8px",     //  Die Schriftgröße der Labels "Aktuell" und "Als Nächstes" in den Infoblöcken.
    status: "free",
    time: "--:--",
    timeClassName: "text-[10px]",
    top: 399,
    left: 830,
    width: 45,
    height: 61,
  },
    {
    id: "raum-j",
    name: "Marienplatz",
    contentOrder: ["name", "time"],
    nameClassName: "text-[10px]",
    nameFontSize: "25px",
    bookedBy: "Kalender wird geladen...",
    labelBackgroundColor: "#ffffff",
    labelBorderColor: "#010101",
    labelColor: "hsl(240, 18%, 3%)",
    labelPosition: "right",
    labelOffsetX: -100,
    labelOffsetY: -50,
    bookedByVisibilityRules: [      // Beispielregel: Am Wochenende blendet die Arena den Namen der buchenden Person aus und zeigt nur die Uhrzeit an.
      {
        weekdays: [1, 2, 3, 4], // Montag bis Donnerstag
        startTime: "6:00",
        endTime: "18:30",
        hideBookedBy: true,
        hideCurrentEventName: true,
        hideNextEventName: true,
      },
       {
        weekdays: [5], // Freitag
        startTime: "6:00",
        endTime: "11:30",
        hideBookedBy: true,
        hideCurrentEventName: true,
        hideNextEventName: true,
      },
       {
        weekdays: [0], // Sonntag
        startTime: "14:00",
        endTime: "23:59",
        hideBookedBy: true,
        hideCurrentEventName: true,
        hideNextEventName: true,
      },
    ],
    overlayInfoFontSize: "8px",
    overlayInfoLabelFontSize: "8px",     //  Die Schriftgröße der Labels "Aktuell" und "Als Nächstes" in den Infoblöcken.
    status: "free",
    time: "--:--",
    timeClassName: "text-[10px]",
    top: 621,
    left: 790,
    width: 45,
    height: 63,
  },

   {
    id: "raum-g",
    name: "Glasraum",
    contentOrder: ["name", "time"],
    nameClassName: "text-[10px]",
    nameFontSize: "20px",
    bookedBy: "Kalender wird geladen...",
    labelBackgroundColor: "#ffffff",
    labelBorderColor: "#d4d4d8",
    labelColor: "#18181b",
    labelPosition: "inside",
    labelOffsetX: 12,
    labelOffsetY: 12,
    bookedByVisibilityRules: [      // Beispielregel: Am Wochenende blendet die Arena den Namen der buchenden Person aus und zeigt nur die Uhrzeit an.
      {
        weekdays: [1, 2, 3, 4], // Montag bis Donnerstag
        startTime: "6:00",
        endTime: "18:30",
        hideBookedBy: true,
        hideCurrentEventName: true,
        hideNextEventName: true,
      },
       {
        weekdays: [5], // Freitag
        startTime: "6:00",
        endTime: "11:30",
        hideBookedBy: true,
        hideCurrentEventName: true,
        hideNextEventName: true,
      },
       {
        weekdays: [0], // Sonntag
        startTime: "14:00",
        endTime: "23:59",
        hideBookedBy: true,
        hideCurrentEventName: true,
        hideNextEventName: true,
      },
    ],
    status: "free",
    time: "--:-- ",
    timeClassName: "text-[10px]",
    overlayInfoFontSize: "8px",
    overlayInfoLabelFontSize: "8px",     //  Die Schriftgröße der Labels "Aktuell" und "Als Nächstes" in den Infoblöcken.
    top: 590,
    left: 1005,
    width: 107,
    height: 159,
  },
    {
    id: "raum-i",
    name: "Zugspitze",
    contentOrder: ["name", "time"],
    nameClassName: "text-[10px]",
    nameFontSize: "20px",
    bookedBy: "Kalender wird geladen...",
    labelBackgroundColor: "#ffffff",
    labelBorderColor: "#d4d4d8",
    labelColor: "#18181b",
    labelPosition: "inside",
    labelOffsetX: 12,
    labelOffsetY: 12,
    bookedByVisibilityRules: [      // Beispielregel: Am Wochenende blendet die Arena den Namen der buchenden Person aus und zeigt nur die Uhrzeit an.
      {
        weekdays: [1, 2, 3, 4], // Montag bis Donnerstag
        startTime: "6:00",
        endTime: "18:30",
        hideBookedBy: true,
        hideCurrentEventName: true,
        hideNextEventName: true,
      },
       {
        weekdays: [5], // Freitag
        startTime: "6:00",
        endTime: "11:30",
        hideBookedBy: true,
        hideCurrentEventName: true,
        hideNextEventName: true,
      },
       {
        weekdays: [0], // Sonntag
        startTime: "14:00",
        endTime: "23:59",
        hideBookedBy: true,
        hideCurrentEventName: true,
        hideNextEventName: true,
      },
    ],
    overlayInfoFontSize: "8px",
    overlayInfoLabelFontSize: "8px",     //  Die Schriftgröße der Labels "Aktuell" und "Als Nächstes" in den Infoblöcken.
    status: "free",
    time: "--:--",
    timeClassName: "text-[10px]",
    top: 802,
    left: 478,
    width: 114,
    height: 142,
  },
    {
    id: "raum-d",
    name: "Skyline",
    contentOrder: ["name", "bookedBy", "time"],
    nameClassName: "text-[10px]",
    nameFontSize: "25px",
    bookedBy: "Kalender wird geladen...",
    labelBackgroundColor: "#ffffff",
    labelBorderColor: "#d4d4d8",
    labelColor: "#18181b",
    labelPosition: "inside",
    labelOffsetX: 12,
    labelOffsetY: 12,
    bookedByVisibilityRules: [      // Beispielregel: Am Wochenende blendet die Arena den Namen der buchenden Person aus und zeigt nur die Uhrzeit an.
      {
        weekdays: [1, 2, 3, 4], // Montag bis Donnerstag
        startTime: "6:00",
        endTime: "18:30",
        hideBookedBy: true,
        hideCurrentEventName: true,
        hideNextEventName: true,
      },
       {
        weekdays: [5], // Freitag
        startTime: "6:00",
        endTime: "11:30",
        hideBookedBy: true,
        hideCurrentEventName: true,
        hideNextEventName: true,
      },
       {
        weekdays: [0], // Sonntag
        startTime: "14:00",
        endTime: "23:59",
        hideBookedBy: true,
        hideCurrentEventName: true,
        hideNextEventName: true,
      },
    ],
    overlayInfoFontSize: "8px",
    overlayInfoLabelFontSize: "8px",     //  Die Schriftgröße der Labels "Aktuell" und "Als Nächstes" in den Infoblöcken.
    status: "free",
    time: "--:--",
    timeClassName: "text-[10px]",
    top: 802,
    left: 595,
    width: 170,
    height: 142,
  },
  {
    id: "raum-c",
    name: "Alm",
    nameClassName: "text-[10px]",
    nameFontSize: "30px",
    bookedBy: "Kalender wird geladen...",
    labelBackgroundColor: "#fef3c7",
    labelBorderColor: "#f59e0b",
    labelColor: "#000000",
    labelPosition: "inside",
    labelOffsetX: 12,
    labelOffsetY: 8,
    bookedByVisibilityRules: [      // Beispielregel: Am Wochenende blendet die Arena den Namen der buchenden Person aus und zeigt nur die Uhrzeit an.
      {
        weekdays: [1, 2, 3, 4], // Montag bis Donnerstag
        startTime: "6:00",
        endTime: "18:30",
        hideBookedBy: true,
        hideCurrentEventName: true,
        hideNextEventName: true,
      },
       {
        weekdays: [5], // Freitag
        startTime: "6:00",
        endTime: "11:30",
        hideBookedBy: true,
        hideCurrentEventName: true,
        hideNextEventName: true,
      },
       {
        weekdays: [0], // Sonntag
        startTime: "14:00",
        endTime: "23:59",
        hideBookedBy: true,
        hideCurrentEventName: true,
        hideNextEventName: true,
      },
    ],
    overlayInfoFontSize: "8px",
    overlayInfoLabelFontSize: "8px",     //  Die Schriftgröße der Labels "Aktuell" und "Als Nächstes" in den Infoblöcken.
    // overlayBorderColor: "#a16207",
    // overlayBorderWidth: "3px",
    status: "free",
    time: "--:--",
    timeClassName: "text-[14px]",
    top: 948,
    left: 478,
    width: 288,
    height: 165,
  },   
    {
    id: "raum-b",
    name: "Studio",
    nameClassName: "text-[10px]",
    nameFontSize: "30px",
    bookedBy: "Kalender wird geladen...",
    labelBackgroundColor: "#ffffff",
    labelBorderColor: "#d4d4d8",
    labelColor: "#18181b",
    labelPosition: "inside",
    labelOffsetX: 12,
    labelOffsetY: 12,
    bookedByVisibilityRules: [      // Beispielregel: Am Wochenende blendet die Arena den Namen der buchenden Person aus und zeigt nur die Uhrzeit an.
      {
        weekdays: [1, 2, 3, 4], // Montag bis Donnerstag
        startTime: "6:00",
        endTime: "18:30",
        hideBookedBy: true,
        hideCurrentEventName: true,
        hideNextEventName: true,
      },
       {
        weekdays: [5], // Freitag
        startTime: "6:00",
        endTime: "11:30",
        hideBookedBy: true,
        hideCurrentEventName: true,
        hideNextEventName: true,
      },
       {
        weekdays: [0], // Sonntag
        startTime: "14:00",
        endTime: "23:59",
        hideBookedBy: true,
        hideCurrentEventName: true,
        hideNextEventName: true,
      },
    ],
    status: "free",
    time: "--:--",
    timeClassName: "text-[10px]",
    top: 890,
    left: 209,
    width: 210,
    height: 180,
  },
];

export const orientationPoint: OrientationPoint = {
  label: "Standort",
  nameFontSize: "30px",
  labelBackgroundColor: "#ffffff",
  labelBorderColor: "#d4d4d8",
  labelColor: "#18181b",
  labelPosition: "inside",
  labelOffsetX: 12,
  labelOffsetY: 12,
  left: 1490,
  top: 540,
};
