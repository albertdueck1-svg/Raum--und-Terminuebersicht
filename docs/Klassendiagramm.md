# Einfaches Klassendiagramm Raumplan

```plantuml
@startuml
left to right direction
skinparam shadowing false
skinparam linetype ortho
skinparam roundcorner 6
skinparam dpi 180
skinparam backgroundColor #F2F2F2
skinparam defaultFontName Arial
skinparam defaultFontSize 12
skinparam classAttributeIconSize 0
skinparam ArrowColor #7A7A7A
skinparam class {
  BackgroundColor #E9D7B8
  BorderColor #8A7A63
  FontColor #4E463C
  HeaderBackgroundColor #E2CFAE
}

class RaumplanPage <<Seite>> {
  - roomCalendars: RoomCalendarsResponse | null
  + loadRoomCalendars()
  + mergeRoomCalendars(rooms, calendars): RoomBase[]
}

class RaumplanPdfViewer <<Viewer>> {
  - orientationPoint: OrientationPoint
  - roomCalendars: Record<string, RoomCalendarData>
  - rooms: RoomBase[]
  - wayfindingPaths: WayfindingPath[]
}

class RaumplanOverlay <<Overlay>> {
  - orientationPoint: OrientationPoint
  - roomCalendars: Record<string, RoomCalendarData>
  - rooms: RoomBase[]
  - wayfindingPaths: WayfindingPath[]
  + getEffectiveOverlayStyle(room)
  + getActiveVisibilityRule(rules, now)
}

class RaumplanLegende <<UI>> {
  - items: LegendItem[]
  - overlayTexts
  - pageTexts
  + getLegendItemByStatus(status): LegendItem
}

class RoomBase <<Entity>> {
  - id: string
  - name: string
  - bookedBy: string
  - status: free | live | soon | blocked
  - time: string
  - top: number
  - left: number
  - width: number
  - height: number
  - showCalendarInfo?: boolean
}

class RoomCalendarData <<Entity>> {
  - currentEvent: Event | null
  - nextEvent: NextEvent | null
  - selectedEvent: SelectedEvent | null
  - todayEvents: DisplayEvent[]
  - error: boolean
  - htmlUrl: string
}

class Event <<ValueObject>> {
  - summary: string
  - time: string
}

class NextEvent <<ValueObject>> {
  - summary: string
  - time: string
  - minutesUntilStart: number | null
}

class OrientationPoint <<ValueObject>> {
  - label: string
  - left: number
  - top: number
}

class WayfindingPath <<ValueObject>> {
  - id: string
  - label?: string
  - points: WayfindingPoint[]
  - color?: string
}

class LegendItem <<ValueObject>> {
  - id: string
  - status: RoomStatus
  - label: string
  - description: string
  - fillColor: string
  - borderColor: string
}

RaumplanPage --> RaumplanPdfViewer : rendert
RaumplanPage --> RaumplanLegende : rendert
RaumplanPage --> RoomCalendarData : lädt per API
RaumplanPage --> RoomBase : aktualisiert Status

RaumplanPdfViewer --> RaumplanOverlay : zeigt Lageplan mit Overlay

RaumplanOverlay --> RoomBase : visualisiert Räume
RaumplanOverlay --> RoomCalendarData : zeigt Termine
RaumplanOverlay --> OrientationPoint : zeigt Standort
RaumplanOverlay --> WayfindingPath : zeichnet Wege
RaumplanOverlay --> RaumplanLegende : nutzt Farben / Texte

RaumplanLegende --> LegendItem : enthält
RoomCalendarData --> Event : aktueller Termin
RoomCalendarData --> NextEvent : nächster Termin
@enduml
```

Kurz gesagt:

- `RaumplanPage` ist die Hauptseite. Sie holt Kalenderdaten von `/api/room-calendars`.
- `RoomBase` beschreibt einen Raum auf dem Lageplan, inklusive Position, Groesse und Status.
- `RoomCalendarData` beschreibt die Termine eines Raums.
- `mergeRoomCalendars` verbindet Raumdaten und Kalenderdaten.
- `RaumplanPdfViewer` zeigt den Lageplan als Bild.
- `RaumplanOverlay` legt Raeume, Wege und Standort ueber den Lageplan.
- `RaumplanLegende` liefert Farben, Texte und Status-Erklaerungen.

# Einfaches Flussdiagramm Raumplan

```mermaid
flowchart TD
  A[Benutzer oeffnet Raumplan-Seite] --> B[RaumplanPage wird geladen]
  B --> C[Statische Raumdaten laden]
  C --> C1[baseRooms: Raeume mit Kalender]
  C --> C2[leereRaeume: Raeume ohne Kalender]

  B --> D[Kalenderdaten per API abrufen]
  D --> E{/api/room-calendars erreichbar?}

  E -- Nein --> F[Fehler im Kalenderstatus merken]
  E -- Ja --> G[ICS-Kalender pro Raum laden]
  G --> H[Termine parsen]
  H --> I[Aktuellen und naechsten Termin bestimmen]

  F --> J[mergeRoomCalendars ausfuehren]
  I --> J
  C1 --> J

  J --> K{Raum hat Kalenderdaten?}
  K -- Nein --> L[Raum unveraendert anzeigen]
  K -- Ja --> M{Aktueller Termin vorhanden?}

  M -- Ja --> N{Termin enthaelt block?}
  N -- Ja --> O[Status: blocked]
  N -- Nein --> P[Status: live]

  M -- Nein --> Q{Naechster Termin startet in <= 15 Minuten?}
  Q -- Ja --> R[Status: soon]
  Q -- Nein --> S[Status: free]

  L --> T[Alle Raeume zusammenfuehren]
  O --> T
  P --> T
  R --> T
  S --> T
  C2 --> T

  T --> U[RaumplanPdfViewer zeigt Lageplan-Bild]
  U --> V[RaumplanOverlay zeichnet Raeume, Wege und Standort]
  V --> W[RaumplanLegende zeigt Farben und Bedeutungen]
  W --> X[Raumplan ist sichtbar]

  X --> Y[Alle 3 Sekunden Kalenderdaten neu laden]
  Y --> D
```

Kurz gesagt:

- Die Seite laedt zuerst die statischen Raumpositionen.
- Danach ruft sie die Kalender-API ab.
- Aus den Kalenderdaten wird pro Raum ein Status berechnet: `free`, `live`, `soon` oder `blocked`.
- Am Ende werden alle Raeume ueber den Lageplan gelegt.
- Der Kalenderstatus wird automatisch alle 3 Sekunden aktualisiert.
