import { DateTime } from "luxon";

export type Direction = "before" | "after";

export const isInTime = (
  utcDate: string,
  targetTime: string,
  direction: Direction,
  zone: string
): boolean => {
  const dateInUtc = DateTime.fromISO(utcDate, { zone: "utc" });

  const [hours, minutes] = targetTime.split(":").map(Number);
  const targetDate = DateTime.fromObject({
    year: dateInUtc.year,
    month: dateInUtc.month,
    day: dateInUtc.day,
    hour: hours,
    minute: minutes,
  })
    .setZone(zone)
    .toUTC();

  if (direction === "before") {
    return dateInUtc <= targetDate;
  } else if (direction === "after") {
    return dateInUtc >= targetDate;
  }

  throw new Error(
    `Invalid direction "${direction}". Must be "before" or "after".`
  );
};
