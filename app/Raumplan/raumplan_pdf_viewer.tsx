"use client";

import Image from "next/image";
import RaumplanOverlay from "./raumoverlay";
import type { OrientationPoint, RoomBase, WayfindingPath } from "./raumplan_positions";

const planDisplayWidth = 1883;
const planDisplayHeight = 1928;

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
        <Image
          alt="Lageplan ICF"
          className="block max-w-none"
          height={planDisplayHeight}
          priority
          src="/Lageplan_ICF_Neu_V1.png"
          style={{
            height: `${planDisplayHeight}px`,
            width: `${planDisplayWidth}px`,
          }}
          width={planDisplayWidth}
        />

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
