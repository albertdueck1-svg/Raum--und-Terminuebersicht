import type { CSSProperties } from "react";
import type {
  EventNameVisibilityRule,
  OrientationPoint,
  RoomBase,
  WayfindingPath,
} from "./raumplan_positions";
import { getLegendItemByStatus, raumplanLegende } from "./raumplan_legende";

type RoomCalendarData = {
  currentEvent: { summary: string; time: string } | null;
  nextEvent: { minutesUntilStart: number | null; summary: string; time: string } | null;
};

type RaumplanOverlayProps = {
  orientationPoint: OrientationPoint;
  roomCalendars?: Record<string, RoomCalendarData> | null;
  rooms: RoomBase[];
  wayfindingPaths?: WayfindingPath[];
};

function getRoomOverlayStyle(status: RoomBase["status"]): CSSProperties {
  const legendItem = getLegendItemByStatus(status);

  return {
    backgroundColor: legendItem.fillColor,
    backgroundImage: typeof legendItem.fillImage === "string" ? legendItem.fillImage : undefined,
    borderColor: legendItem.borderColor,
    color: "#ffffff",
  };
}

function getEffectiveOverlayStyle(room: RoomBase) {
  const baseStyle = getRoomOverlayStyle(room.status);

  return {
    ...baseStyle,
    backgroundColor: room.overlayGroundColor ?? baseStyle.backgroundColor,
    backgroundImage: room.overlayGroundColor ? undefined : baseStyle.backgroundImage,
    borderColor: room.overlayBorderColor ?? baseStyle.borderColor,
    borderWidth: room.overlayBorderWidth ?? "2px",
  };
}

function getBerlinWeekdayAndMinutes(now: Date) {
  const weekdayFormatter = new Intl.DateTimeFormat("en-US", {
    timeZone: "Europe/Berlin",
    weekday: "short",
  });
  const timeFormatter = new Intl.DateTimeFormat("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
    timeZone: "Europe/Berlin",
  });
  const weekdayMap: Record<string, number> = {
    Mon: 1,
    Tue: 2,
    Wed: 3,
    Thu: 4,
    Fri: 5,
    Sat: 6,
    Sun: 0,
  };
  const weekday = weekdayMap[weekdayFormatter.format(now)] ?? now.getDay();
  const [hours, minutes] = timeFormatter.format(now).split(":").map(Number);

  return { minutes: hours * 60 + minutes, weekday };
}

function parseTimeToMinutes(value: string) {
  const [hours, minutes] = value.split(":").map(Number);

  return hours * 60 + minutes;
}

function getActiveVisibilityRule(
  rules: EventNameVisibilityRule[] | undefined,
  now: Date,
) {
  if (!rules?.length) {
    return null;
  }

  const berlinTime = getBerlinWeekdayAndMinutes(now);

  return (
    rules.find((rule) => {
      if (!rule.weekdays.includes(berlinTime.weekday)) {
        return false;
      }

      const startMinutes = parseTimeToMinutes(rule.startTime);
      const endMinutes = parseTimeToMinutes(rule.endTime);

      return berlinTime.minutes >= startMinutes && berlinTime.minutes < endMinutes;
    }) ?? null
  );
}

export default function RaumplanOverlay({
  orientationPoint,
  roomCalendars,
  rooms,
  wayfindingPaths = [],
}: RaumplanOverlayProps) {
  const now = new Date();

  return (
    <div className="pointer-events-none absolute inset-0">
      <svg className="absolute inset-0 h-full w-full overflow-visible">
        {wayfindingPaths.map((path) => (
          <g key={path.id}>
            <polyline
              fill="none"
              points={path.points.map((point) => `${point.left},${point.top}`).join(" ")}
              stroke={path.color ?? "#2563eb"}
              strokeDasharray={path.strokeDasharray ?? "18 12"}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={path.strokeWidth ?? 8}
            />
            {path.points.length ? (
              <circle
                cx={path.points[path.points.length - 1].left}
                cy={path.points[path.points.length - 1].top}
                fill={path.color ?? "#2563eb"}
                r={(path.strokeWidth ?? 8) / 1.5}
              />
            ) : null}
          </g>
        ))}
      </svg>

      <div
        className="absolute flex flex-col items-center gap-1"
        style={{
          left: orientationPoint.left,
          top: orientationPoint.top,
        }}
      >
        <div
          className="h-5 w-5 rounded-full shadow-lg animate-pulse"    // Orientierungspunkt mit rotem Kreis und Puls-Animation.
          style={{
            backgroundColor: raumplanLegende.orientationPoint.dotBackgroundColor,
            border: `1px solid ${raumplanLegende.orientationPoint.dotBorderColor}`,
            boxShadow: `0 0 14px ${raumplanLegende.orientationPoint.dotShadowColor}`,
          }}
        />
        <span
          className="rounded-full px-2 py-1 text-[10px] font-semibold"
          style={{
            backgroundColor: raumplanLegende.orientationPoint.badgeBackgroundColor,
            border: `2px solid ${raumplanLegende.orientationPoint.badgeBorderColor}`,
            color: raumplanLegende.orientationPoint.badgeTextColor,
          }}
        >
          {orientationPoint.label}
        </span>
      </div>

      {rooms.map((room) => {
        const activeRule = getActiveVisibilityRule(room.bookedByVisibilityRules, now);
        const showCurrentEventName = !activeRule?.hideCurrentEventName;
        const showNextEventName = !activeRule?.hideNextEventName;
        const showOverlayEventBlock =
          room.showCalendarInfo !== false && !!roomCalendars?.[room.name];

        return (
          <div
            key={room.id}
            className="absolute flex flex-col items-center justify-center overflow-visible rounded-lg border-2 p-1 text-center text-sm font-semibold leading-tight"
            style={{
              ...getEffectiveOverlayStyle(room),
              top: room.top,
              left: room.left,
              width: room.width,
              height: room.height,
            }}
            title={`${room.name} - ${room.bookedBy} (${room.time})`}
          >
              {room.labelPosition !== "right" ? (
                <span
                  className={room.nameClassName}
                  style={{
                    color: room.labelColor,
                    fontSize: room.nameFontSize,
                  }}
                >
                  {room.name}
                </span>
              ) : null}

              {showOverlayEventBlock ? (
                <div
                  className="mt-2 flex max-w-full flex-col gap-1 rounded-md bg-black/20 px-2 py-1 text-left font-medium text-white"
                  style={{
                    fontSize: room.overlayInfoFontSize ?? "10px",
                  }}
                >
                  <span
                    className="uppercase tracking-[0.12em] text-white/80"
                    style={{
                      fontSize: room.overlayInfoLabelFontSize ?? "9px",
                    }}
                  >
                    {raumplanLegende.overlayTexts.currentLabel}
                  </span>
                  {showCurrentEventName ? (
                    <span className="truncate">
                      {roomCalendars[room.name].currentEvent?.summary ?? raumplanLegende.overlayTexts.currentEventFallback}
                    </span>
                  ) : null}
                  <span className="text-white/80">
                    {roomCalendars[room.name].currentEvent?.time ?? raumplanLegende.overlayTexts.currentTimeFallback}
                  </span>
                  <span
                    className="mt-1 uppercase tracking-[0.12em] text-white/80"
                    style={{
                      fontSize: room.overlayInfoLabelFontSize ?? "9px",
                    }}
                  >
                    {raumplanLegende.overlayTexts.nextLabel}
                  </span>
                  {showNextEventName ? (
                    <span className="truncate">
                      {roomCalendars[room.name].nextEvent?.summary ?? raumplanLegende.overlayTexts.nextEventFallback}
                    </span>
                  ) : null}
                  <span className="text-white/80">
                    {roomCalendars[room.name].nextEvent?.time ?? raumplanLegende.overlayTexts.nextTimeFallback}
                  </span>
                </div>
              ) : null}

              {room.labelPosition === "right" ? (
                <span
                  className={`absolute z-10 rounded-md px-2 py-1 ${room.nameClassName ?? ""}`}
                  style={{
                    backgroundColor: room.labelBackgroundColor ?? "#ffffff",
                    border: `1px solid ${room.labelBorderColor ?? "#d4d4d8"}`,
                    color: room.labelColor ?? "#18181b",
                    fontSize: room.nameFontSize,
                    left: room.width + (room.labelOffsetX ?? 10),
                    top: room.labelOffsetY ?? 0,
                    whiteSpace: "nowrap",
                  }}
                >
                  {room.name}
                </span>
              ) : null}
          </div>
        );
      })}
    </div>
  );
}
