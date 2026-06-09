"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import RaumplanOverlay from "./raumoverlay";
import type { OrientationPoint, RoomBase, WayfindingPath } from "./raumplan_positions";

const planDisplayWidth = 3840;
const planDisplayHeight = 2160;

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
  const stageRef = useRef<HTMLDivElement | null>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const updateScale = () => {
      if (!stageRef.current) {
        return;
      }

      const { width } = stageRef.current.getBoundingClientRect();
      setScale(width / planDisplayWidth);
    };

    updateScale();

    const resizeObserver = new ResizeObserver(updateScale);

    if (stageRef.current) {
      resizeObserver.observe(stageRef.current);
    }

    window.addEventListener("resize", updateScale);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", updateScale);
    };
  }, []);

  return (
    <div className="overflow-hidden rounded-3xl bg-white p-2 shadow-sm ring-1 ring-zinc-200 sm:p-4">
      <div
        className="mx-auto w-full"
        style={{
          aspectRatio: `${planDisplayWidth} / ${planDisplayHeight}`,
          maxHeight: "calc(100vh - 150px)",
          maxWidth: "calc((100vh - 150px) * 16 / 9)",
        }}
      >
        <div ref={stageRef} className="relative h-full w-full overflow-hidden">
          <div
            className="absolute left-0 top-0 origin-top-left"
            style={{
              height: `${planDisplayHeight}px`,
              transform: `scale(${scale})`,
              width: `${planDisplayWidth}px`,
            }}
          >
            <Image
              alt="Lageplan ICF"
              className="block max-w-none"
              height={planDisplayHeight}
              priority
              //src="/Lageplan_ICF_Neu_V3.png"
              src="/Lageplan_ICF_Neu_V7.png"
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
      </div>
    </div>
  );
}
