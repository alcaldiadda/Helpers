import { SchedulesProps } from "./Types";
import { DateTime, Interval } from "luxon";

interface OvertimeResult {
  hours: number;
  minutes: number;
  start: string;
  end: string;
}

interface OvertimeCalculation {
  start: string;
  end: string;
  timezone: string;
  isWorkingDay: boolean;
}

export const calculateOvertime = (
  { start, end, isWorkingDay, timezone }: OvertimeCalculation,
  overtimeSessions: SchedulesProps[]
): Record<string, OvertimeResult> => {
  let startDate = DateTime.fromISO(start).setZone(timezone);
  let endDate = DateTime.fromISO(end).setZone(timezone);

  const workInterval = Interval.fromDateTimes(startDate, endDate);

  let overtimeResults: Record<string, { minutes: number; interval: Interval }> =
    {};

  // Initialize overtimeResults
  overtimeSessions.forEach((session) => {
    overtimeResults[session.name] = {
      minutes: 0,
      interval: Interval.invalid("Not Set"),
    };
  });

  while (startDate < endDate) {
    overtimeSessions.forEach((session) => {
      const sessionStartParts = session.time.start.split(":");
      const sessionEndParts = session.time.end.split(":");

      let sessionStartDate = startDate.set({
        hour: Number(sessionStartParts[0]),
        minute: Number(sessionStartParts[1]),
      });
      let sessionEndDate = startDate.set({
        hour: Number(sessionEndParts[0]),
        minute: Number(sessionEndParts[1]),
      });

      // If the end time is less than start time, it means the session goes into the next day
      if (sessionEndDate < sessionStartDate) {
        sessionEndDate = sessionEndDate.plus({ days: 1 });
      }

      const overtimeInterval = Interval.fromDateTimes(
        sessionStartDate,
        sessionEndDate
      );

      const intersection = workInterval.intersection(overtimeInterval);

      if (intersection) {
        overtimeResults[session.name].minutes += intersection.length("minutes");
        if (!overtimeResults[session.name].interval.isValid) {
          overtimeResults[session.name].interval = intersection;
        } else {
          overtimeResults[session.name].interval =
            overtimeResults[session.name].interval.union(intersection);
        }
      }
    });

    startDate = startDate.plus({ days: 1 });
  }

  // handle the holiday and weekend scenario
  if (!isWorkingDay) {
    const totalMinutes = workInterval.length("minutes");
    return {
      "25": {
        hours: 0,
        minutes: 0,
        start,
        end,
      },
      "50": {
        hours: Math.floor(totalMinutes / 60),
        minutes: Math.round(totalMinutes % 60),
        start,
        end,
      },
    };
  }

  const overtimeOutput: Record<string, OvertimeResult> = {};

  Object.keys(overtimeResults).forEach((key) => {
    const totalMinutes = overtimeResults[key].minutes;
    overtimeOutput[key] = {
      hours: Math.floor(totalMinutes / 60),
      minutes: Math.round(totalMinutes % 60),
      start: overtimeResults[key].interval.start?.toUTC().toISO() || "",
      end: overtimeResults[key].interval.end?.toUTC().toISO() || "",
    };
    if (overtimeOutput[key].minutes === 60) {
      overtimeOutput[key].hours += 1;
      overtimeOutput[key].minutes = 0;
    }
  });

  return overtimeOutput;
};
