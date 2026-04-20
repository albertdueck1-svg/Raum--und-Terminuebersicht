"use client";

import { Document, Page, pdfjs } from "react-pdf";
import RaumplanOverlay from "./raumoverlay";
import type { OrientationPoint, RoomBase, WayfindingPath } from "./raumplan_positions";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url,
).toString();

type RoomCalendarData = {
  currentEvent: { summary: string; time: string } | null;
  nextEvent: { minutesUntilStart: number | null; summary: string; time: string } | null;
};

type RaumplanPdfViewerProps = {
  orientationPoint: OrientationPoint;
  roomCalendars?: Record<string, RoomCalendarData> | null;
  rooms: RoomBase[];
  wayfindingPaths?: WayfindingPath[];
};

export default function RaumplanPdfViewer({
  orientationPoint,
  roomCalendars,
  rooms,
  wayfindingPaths = [],
}: RaumplanPdfViewerProps) {
  return (
    <div className="overflow-auto rounded-3xl bg-white p-4 shadow-sm ring-1 ring-zinc-200">
      <div className="relative mx-auto w-fit">
        <Document file="/Lageplan_ICF.pdf" loading="PDF wird geladen...">
          <Page
            pageNumber={1}
            width={3000}
            renderAnnotationLayer={false}
            renderTextLayer={false}
          />
        </Document>

        <RaumplanOverlay
          orientationPoint={orientationPoint}
          roomCalendars={roomCalendars}
          rooms={rooms}
          wayfindingPaths={wayfindingPaths}
        />
      </div>
    </div>
  );
}
