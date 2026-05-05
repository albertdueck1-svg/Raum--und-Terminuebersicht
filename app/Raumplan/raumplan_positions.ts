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
  nameOffsetX?: number;
  nameOffsetY?: number;
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
  nameOffsetX?: number;
  nameOffsetY?: number;
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
    nameOffsetX: 0,
    nameOffsetY: 0,
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
    top: 598,
    left: 1225,
    width: 495,
    height: 514,
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
    top: 1120,
    left: 1225,
    width: 340,
    height: 340,
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
    top: 1465,
    left: 1225,
    width: 340,
    height: 282,  
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
    top: 190,
    left: 830,
    width: 49,
    height: 65,
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
    top: 270,
    left: 830,
    width: 48,
    height: 69,
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
    labelOffsetX: -130,
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
    top: 510,
    left: 786,
    width: 48,
    height: 67,
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
    top: 486,
    left: 1030,
    width: 119,
    height: 186,
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
    top: 735,
    left: 425,
    width: 130,
    height: 160,
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
    top: 735,
    left: 561,
    width: 194,
    height: 161,
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
    top: 901,
    left: 425,
    width: 330,
    height: 188,
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
    top: 835,
    left: 117,
    width: 242,
    height: 208,
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
  left: 1595,
  top: 415,
};