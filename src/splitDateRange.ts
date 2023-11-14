import { Period } from "./types";
import { DateTime, Interval, Settings } from "luxon";

Settings.defaultZone = "utc"; // set the default timezone for all DateTime objects to UTC

interface SplitDateRangeInput {
  start: string;
  end: string;
  timezone: string;
}

export const splitDateRange = ({
  start,
  end,
  timezone,
}: SplitDateRangeInput): Period[] => {
  let startDate = DateTime.fromISO(start, { zone: timezone });
  let endDate = DateTime.fromISO(end, { zone: timezone });

  let periods: Period[] = [];
  while (startDate < endDate) {
    // Calculate the end of the current day
    let endOfDay = startDate.set({
      hour: 23,
      minute: 59,
      second: 59,
      millisecond: 999,
    });

    // If the end date is before the end of the current day, use the end date
    const endDayDuration = Interval.fromDateTimes(endOfDay, endDate).length(
      "minutes"
    );
    if (endDate < endOfDay || endDayDuration < 1) {
      endOfDay = endDate;
    }

    // Skip if the period duration is less than a minute
    const periodDuration = Interval.fromDateTimes(startDate, endOfDay).length(
      "minutes"
    );

    if (periodDuration > 1) {
      periods.push({
        start: startDate.toUTC().toString(),
        end: endOfDay.toUTC().toString(),
      });
    }

    // Set start to the start of the next day
    startDate = endOfDay.set({
      hour: 24,
      minute: 0,
      second: 0,
      millisecond: 0,
    });
  }

  return periods;
};
