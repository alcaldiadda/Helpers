import { HoursAndExtended } from "./types";

interface CalculatePeriodProps {
  start: string;
  end: string;
  basePeriodMinutes: number;
}

export const calculatePeriod = ({
  start,
  end,
  basePeriodMinutes,
}: CalculatePeriodProps): HoursAndExtended => {
  const startDateTime = new Date(start);
  const endDateTime = new Date(end);

  // Calculate total lunch time in minutes
  const diffMs = Math.abs(endDateTime.getTime() - startDateTime.getTime());
  const totalLunchMinutes = Math.floor(diffMs / 1000 / 60);

  // Calculate normal and extended lunch time
  let normalMinutes = totalLunchMinutes;
  let extendedMinutes = 0;

  if (totalLunchMinutes > basePeriodMinutes) {
    normalMinutes = basePeriodMinutes;
    extendedMinutes = totalLunchMinutes - basePeriodMinutes;
  }

  const hours = Math.floor(normalMinutes / 60);
  const minutes = normalMinutes % 60;

  const hoursExtended = Math.floor(extendedMinutes / 60);
  const minutesExtended = extendedMinutes % 60;

  return {
    hours,
    minutes,
    hoursExtended,
    minutesExtended,
  };
};
