import { DateTime, DurationUnit } from "luxon";

export const diffBetweenDates = (date1: string, date2: string, unit: DurationUnit = "hours"): number => {
  // Parse the dates
  const dt1 = DateTime.fromISO(date1);
  const dt2 = DateTime.fromISO(date2);

  // Get the difference
  const diff = dt2.diff(dt1).as(unit);

  return diff;
};
