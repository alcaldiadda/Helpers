import { DateTime } from "luxon";
import { SchedulesProps } from "./types";

/* 
  Given a date, determine what are the schedules in a array of schedules
  If you give xxxxx/xx/xx and for that date the weekday is monday, and in
  the schedule there is an schedule for that day it will return an array with

  name: string;
  type: string;
  dayStart: number;
  dayEnd: number;
  time: {
    start: string;
    end: string;
  };
*/
export const getSchedules = (
  date: string,
  type: string,
  schedules: SchedulesProps[]
) => {
  const weekday = DateTime.fromISO(date).weekday;

  const result = schedules.filter(
    (schedule) =>
      schedule.type.startsWith(type) &&
      weekday >= schedule.dayStart &&
      weekday <= schedule.dayEnd
  );

  return result;
};
