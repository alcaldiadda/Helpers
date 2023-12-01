import { DateTime } from "luxon";

interface DateData {
  start: string;
  end: string;
}

interface SessionData {
  start: string;
  end: string;
}

// Check if data is within session time range
export const checkTimeRange = (
  data: DateData,
  session: SessionData,
  timezone: string
): boolean => {
  const { start: startSession, end: endSession } = session;
  const { start: startDate, end: endDate } = data;

  const startDateLocal = DateTime.fromISO(startDate).setZone(timezone);
  const endDateLocal = DateTime.fromISO(endDate).setZone(timezone);

  startDateLocal.set({ second: 0, millisecond: 0 });
  endDateLocal.set({ second: 0, millisecond: 0 });

  const [startHour, startMinute] = startSession.split(":").map(Number);
  const [endHour, endMinute] = endSession.split(":").map(Number);

  const startSessionDate = DateTime.fromObject(
    {
      year: startDateLocal.year,
      month: startDateLocal.month,
      day: startDateLocal.day,
      hour: startHour,
      minute: startMinute,
      second: 0,
      millisecond: 0,
    },
    { zone: timezone }
  );

  const endSessionDate = DateTime.fromObject(
    {
      year: endDateLocal.year,
      month: endDateLocal.month,
      day: endDateLocal.day,
      hour: endHour,
      minute: endMinute,
      second: 0,
      millisecond: 0,
    },
    { zone: timezone }
  );

  return startDateLocal >= startSessionDate && endDateLocal <= endSessionDate;
};
