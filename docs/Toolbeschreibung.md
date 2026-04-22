# Beschreibung der verwendeten Tools

In diesem Projekt werden mehrere Tools und Technologien verwendet, um den Raumplan anzuzeigen, Kalenderdaten zu laden und die Dokumentation mit Diagrammen zu erstellen.

## Entwicklungsumgebung

### Visual Studio Code

Visual Studio Code wird als Entwicklungsumgebung genutzt. Darin werden die Projektdateien bearbeitet, zum Beispiel TypeScript-Dateien, React-Komponenten und die Markdown-Dokumentation.

### Node.js und npm

Node.js stellt die Laufzeitumgebung fuer das Projekt bereit. Mit npm werden Abhaengigkeiten installiert und Projektbefehle ausgefuehrt.

Wichtige npm-Befehle:

```bash
npm run dev
npm run build
npm run lint
```

- `npm run dev` startet die Anwendung lokal im Entwicklungsmodus.
- `npm run build` erstellt eine produktionsfertige Version.
- `npm run lint` prueft den Code auf Stil- und Qualitaetsprobleme.

## Anwendung

### Next.js

Next.js ist das verwendete React-Framework. Es stellt die Seitenstruktur, das Routing und die API-Route bereit.

Im Projekt wird Next.js unter anderem fuer diese Bereiche genutzt:

- `app/page.tsx`: Startseite
- `app/Raumplan/page.tsx`: Raumplan-Seite
- `app/api/room-calendars/route.ts`: API-Route fuer Kalenderdaten

### React

React wird fuer die Benutzeroberflaeche verwendet. Die sichtbaren Bestandteile des Raumplans sind als Komponenten aufgebaut.

Wichtige Komponenten:

- `RaumplanPage`: Hauptseite des Raumplans
- `RaumplanPdfViewer`: zeigt den Lageplan als Bild
- `RaumplanOverlay`: legt Raeume, Wege und Standort ueber den Lageplan
- `RaumplanLegende`: zeigt die Bedeutung der Farben und Statuswerte

### TypeScript

TypeScript wird verwendet, um die Datenstrukturen im Projekt genauer zu beschreiben. Dadurch ist klarer, welche Eigenschaften ein Raum, ein Termin oder ein Weg besitzen muss.

Beispiele:

- `RoomBase`: beschreibt einen Raum auf dem Lageplan
- `RoomCalendarData`: beschreibt Kalenderdaten eines Raums
- `WayfindingPath`: beschreibt Wege auf dem Lageplan
- `LegendItem`: beschreibt einen Eintrag in der Legende

### Tailwind CSS

Tailwind CSS wird fuer das Styling der Oberflaeche genutzt. Viele Klassen in den Komponenten steuern Layout, Farben, Abstaende, Schriftgroessen und Rahmen.

Beispiele:

- `flex`
- `rounded-3xl`
- `bg-white`
- `text-sm`
- `shadow-sm`

### Next Image

Die Komponente `next/image` wird verwendet, um den Lageplan als Bild optimiert anzuzeigen. Im Projekt wird dafuer die Datei `public/Lageplan_ICF.png` genutzt.

## Kalenderdaten

### ICS-Kalender

Die Raumbelegungen werden aus externen ICS-Kalendern gelesen. In der Datei `app/api/room-calendars/route.ts` sind die Kalender-URLs pro Raum hinterlegt.

Die API liest die ICS-Daten, verarbeitet Termine und liefert pro Raum Informationen wie:

- aktueller Termin
- naechster Termin
- heutige Termine
- Fehlerstatus

### Fetch API

Die Raumplan-Seite ruft die Kalenderdaten ueber die Browser-Funktion `fetch` ab:

```ts
fetch("/api/room-calendars")
```

Die Daten werden regelmaessig neu geladen, damit der Raumstatus aktuell bleibt.

## Diagramme und Dokumentation

### Markdown

Markdown wird fuer die Dokumentation verwendet. Die Datei `docs/Klassendiagramm.md` enthaelt die Diagramme und kurze Erklaerungen.

### Mermaid

Mermaid wird genutzt, um Diagramme als Text zu beschreiben. Daraus koennen automatisch grafische Diagramme erzeugt werden.

Verwendete Diagrammarten:

- Klassendiagramm
- Flussdiagramm

Die Mermaid-Quelldateien liegen hier:

- `docs/klassendiagramm.mmd`
- `docs/flussdiagramm.mmd`

### Mermaid CLI

Mermaid CLI wurde verwendet, um die `.mmd`-Dateien als `.svg` und `.pdf` zu rendern.

Beispiele:

```bash
npx -y @mermaid-js/mermaid-cli -i docs/klassendiagramm.mmd -o docs/klassendiagramm.svg
npx -y @mermaid-js/mermaid-cli -i docs/flussdiagramm.mmd -o docs/flussdiagramm.pdf --pdfFit -w 2400 -H 2200
```

Erzeugte Dateien:

- `docs/klassendiagramm.svg`
- `docs/klassendiagramm.pdf`
- `docs/flussdiagramm.svg`
- `docs/flussdiagramm.pdf`

## Qualitaetssicherung

### ESLint

ESLint wird verwendet, um den Code auf moegliche Fehler und Stilprobleme zu pruefen. Der Befehl dafuer ist:

```bash
npm run lint
```

## Zusammenfassung

Das Projekt besteht im Kern aus einer Next.js-Anwendung mit React-Komponenten und TypeScript-Typen. Die Raumdaten werden statisch gepflegt, Kalenderdaten werden ueber eine API aus ICS-Kalendern geladen. Die Visualisierung erfolgt ueber einen Lageplan mit Overlays. Fuer die Dokumentation werden Markdown und Mermaid verwendet; die Diagramme wurden mit Mermaid CLI als SVG und PDF gerendert.
