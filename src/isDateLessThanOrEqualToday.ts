import { DateTime } from "luxon";

export const isDateLessThanOrEqualToday = (dateString: string): boolean => {
  const today = DateTime.local().startOf("day");
  const dateToCheck = DateTime.fromISO(dateString).startOf("day");

  return dateToCheck <= today;
};
