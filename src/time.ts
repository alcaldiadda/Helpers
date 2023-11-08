import { DateTime } from "luxon";
import { TIMEZONE } from "./constants";

export const DEFAULT_DATETIME_FORMAT = `ccc dd 'de' MMMM '-' HH:mm`;
export const DEFAULT_DATE_FORMAT = `dd 'de' MMMM 'del' yyyy`;
export const DEFAULT_TIME_FORMAT = `HH:mm`;

export const formatDateTimeFromMillis = (millis: number, format = DEFAULT_DATETIME_FORMAT) => {
  return (
    DateTime.fromMillis(millis * 1000)
      .setLocale("es-CL")
      .setZone(TIMEZONE)
      .toFormat(format) || ""
  );
};

export const formatDateTimeFromISO = (iso: string, format = DEFAULT_DATETIME_FORMAT) => {
  return DateTime.fromISO(iso).setLocale("es-CL").setZone(TIMEZONE).toFormat(format) || "";
};

export const formatDateTimeFromJS = (date: Date, format = DEFAULT_DATETIME_FORMAT) => {
  return DateTime.fromJSDate(date).setLocale("es-CL").setZone(TIMEZONE).toFormat(format) || "";
};

export const formatRelativeDate = (millis: number, format = DEFAULT_DATETIME_FORMAT) => {
  return DateTime.fromMillis(millis).setLocale("es-CL").setZone(TIMEZONE).toFormat(format) || "";
};

export const formatRelativeDateFromISO = (iso: string) => {
  return DateTime.fromISO(iso).setLocale("es-CL").setZone(TIMEZONE).toRelative() || "";
};

export const isDateValid = (iso: string) => DateTime.fromISO(iso).isValid;
