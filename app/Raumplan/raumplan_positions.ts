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
  eventBubbleBackgroundColor?: string;
  eventBubbleBorderColor?: string;
  eventBubbleLabelColor?: string;
  eventBubblePosition?: "inside" | "right" | "left" | "top" | "bottom";
  eventBubbleThoughtPosition?: "right" | "left" | "top" | "bottom";
  eventBubbleTextColor?: string;
  eventBubbleWidth?: number;
  eventBubbleOffsetX?: number;
  eventBubbleOffsetY?: number;
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
  status: "free" | "live" | "soon" | "blocked" | "calendar-error";
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
// Optional: `eventBubblePosition` und die weiteren `eventBubble...` Felder gestalten den Terminblock als externe Sprechblase.
// Optional: `eventBubbleThoughtPosition` steuert die Richtung der Gedankenblasen-Punkte separat.
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
    top: 662,
    left: 3064,
    width: 454,
    height: 473,
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
    top: 1143,
    left: 3064,
    width: 312,
    height: 314,
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
    top: 1460,
    left: 3064,
    width: 312,
    height: 261,  
  },
  {
    id: "raum-e",
    name: "Eisbach",
    contentOrder: ["name", "time"],
    nameClassName: "text-[10px]",
    nameFontSize: "20px",
    bookedBy: "Kalender wird geladen...",
    labelBackgroundColor: "#ffffffda",
    labelBorderColor: "#000000",
    labelColor: "hsl(240, 18%, 3%)",
    labelPosition: "right",
    labelOffsetX: -143,
    labelOffsetY: 12,
    eventBubblePosition: "top",
    eventBubbleThoughtPosition: "top",
    eventBubbleWidth: 250,
    eventBubbleOffsetY: 0,
    eventBubbleOffsetX: -150,
    eventBubbleBackgroundColor: "#ffffffec",
    eventBubbleBorderColor: "#000000",
    eventBubbleTextColor: "hsl(240, 18%, 3%)",
    overlayInfoFontSize: "10px",        //  Die Schriftgröße der Labels "Aktuell" und "Als Nächstes" in den Infoblöcken.
    overlayInfoLabelFontSize: "10px",     //  Die Schriftgröße der Labels "Aktuell" und "Als Nächstes" in den Infoblöcken.
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
    top: 288,
    left: 2699,
    width: 46,
    height: 59,
  },

 {
    id: "raum-k",
    name: "Olympiaturm",
    contentOrder: ["name", "time"],
    nameClassName: "text-[10px]",
    nameFontSize: "20px",
    bookedBy: "Kalender wird geladen...",
    labelBackgroundColor: "#ffffffda",
    labelBorderColor: "#010101",
    labelColor: "hsl(240, 18%, 3%)",
    labelPosition: "right",
    labelOffsetX: -190,
    labelOffsetY: 12,
    eventBubblePosition: "top",
    eventBubbleThoughtPosition: "left",
    eventBubbleWidth: 250,
    eventBubbleOffsetY: -80,
    eventBubbleOffsetX: -320,
    eventBubbleBackgroundColor: "#ffffffda",
    eventBubbleBorderColor: "#000000",
    eventBubbleTextColor: "hsl(240, 18%, 3%)",
    overlayInfoFontSize: "10px",        //  Die Schriftgröße der Labels "Aktuell" und "Als Nächstes" in den Infoblöcken.
    overlayInfoLabelFontSize: "10px",     //  Die Schriftgröße der Labels "Aktuell" und "Als Nächstes" in den Infoblöcken.
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
    top: 361,
    left: 2700,
    width: 45,
    height: 62,
  },
    {
    id: "raum-j",
    name: "Marienplatz",
    contentOrder: ["name", "time"],
    nameClassName: "text-[10px]",
    nameFontSize: "25px",
    bookedBy: "Kalender wird geladen...",
    labelBackgroundColor: "#ffffffec",
    labelBorderColor: "#010101",
    labelColor: "hsl(240, 18%, 3%)",
    labelPosition: "right",
    labelOffsetX: -130,
    labelOffsetY: -50,
    eventBubblePosition: "top",
    eventBubbleThoughtPosition: "left",
    eventBubbleWidth: 250,
    eventBubbleOffsetY: -13,
    eventBubbleOffsetX: -260,
    eventBubbleBackgroundColor: "#ffffffda",
    eventBubbleBorderColor: "#000000",
    eventBubbleTextColor: "hsl(240, 18%, 3%)",
    overlayInfoFontSize: "12px",        //  Die Schriftgröße der Labels "Aktuell" und "Als Nächstes" in den Infoblöcken.
    overlayInfoLabelFontSize: "12px",     //  Die Schriftgröße der Labels "Aktuell" und "Als Nächstes" in den Infoblöcken.
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
    top: 582,
    left: 2660,
    width: 44,
    height: 62,
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
    overlayInfoFontSize: "9px",
    overlayInfoLabelFontSize: "9px",     //  Die Schriftgröße der Labels "Aktuell" und "Als Nächstes" in den Infoblöcken.
    top: 561,
    left: 2885,
    width: 110,
    height: 168,
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
    overlayInfoFontSize: "8.5px",
    overlayInfoLabelFontSize: "8.5px",     //  Die Schriftgröße der Labels "Aktuell" und "Als Nächstes" in den Infoblöcken.
    status: "free",
    time: "--:--",
    timeClassName: "text-[10px]",
    top: 788,
    left: 2328,
    width: 120,
    height: 148,
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
    overlayInfoFontSize: "10px",
    overlayInfoLabelFontSize: "10px",     //  Die Schriftgröße der Labels "Aktuell" und "Als Nächstes" in den Infoblöcken.
    status: "free",
    time: "--:--",
    timeClassName: "text-[10px]",
    top: 788,
    left: 2452,
    width: 180,
    height: 148,
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
    overlayInfoFontSize: "12px",
    overlayInfoLabelFontSize: "12px",     //  Die Schriftgröße der Labels "Aktuell" und "Als Nächstes" in den Infoblöcken.
    // overlayBorderColor: "#a16207",
    // overlayBorderWidth: "3px",
    status: "free",
    time: "--:--",
    timeClassName: "text-[14px]",
    top: 942,
    left: 2328,
    width: 304,
    height: 172,
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
    top: 881,
    left: 2047,
    width: 220,
    height: 191,
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
  left: 3403,
  top: 494,
};
