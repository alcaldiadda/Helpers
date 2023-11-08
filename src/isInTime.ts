import { DateTime } from "luxon";

export type Direction = "before" | "after";

export const isInTime = (inputDate: Date, targetTime: string, direction: Direction, timezone: string): boolean => {
  const dateInUtc = DateTime.fromJSDate(inputDate, { zone: "utc" });

  const [hours, minutes] = targetTime.split(":").map(Number);
  const targetDate = DateTime.fromObject({
    year: dateInUtc.year,
    month: dateInUtc.month,
    day: dateInUtc.day,
    hour: hours,
    minute: minutes,
  })
    .setZone(timezone)
    .toUTC();

  if (direction === "before") {
    return dateInUtc <= targetDate;
  } else if (direction === "after") {
    return dateInUtc >= targetDate;
  }

  throw new Error(`Invalid direction "${direction}". Must be "before" or "after".`);
};
