import { DateTime } from "luxon";
import { TimeObjectProps, TimeToSubtract } from "./types";

export const subtractTimeObjects = (
  time1: TimeObjectProps,
  time2: TimeToSubtract
) => {
  const endTime1 = DateTime.fromISO(time1.end);

  let minutes1 = time1.hours * 60 + time1.minutes;
  let minutesToSubtract = time2.hours * 60 + time2.minutes;

  let diffMinutes = minutes1 - minutesToSubtract;

  // If diffMinutes is negative, the result will have 0 hours and minutes, and the remain will capture the negative difference.
  if (diffMinutes < 0) {
    const absDiffMinutes = Math.abs(diffMinutes);
    let resultHours = Math.floor(absDiffMinutes / 60);
    let resultMinutes = absDiffMinutes % 60;
    return {
      hours: 0,
      minutes: 0,
      start: time1.start,
      end: time1.end,
      remain: { hours: resultHours, minutes: resultMinutes },
    };
  }

  let resultHours = Math.floor(diffMinutes / 60);
  let resultMinutes = diffMinutes % 60;

  const differenceTime = endTime1.minus({ minutes: minutesToSubtract });

  return {
    hours: resultHours,
    minutes: resultMinutes,
    start: time1.start,
    end: differenceTime.toISO(),
    remain: { hours: 0, minutes: 0 },
  };
};
