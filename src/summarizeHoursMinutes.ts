interface SummarizeHoursMinutesProps {
  hours: number;
  minutes: number;
}

export const summarizeHoursMinutes = (docs: SummarizeHoursMinutesProps[]) => {
  let hours = 0;
  let minutes = 0;

  for (const doc of docs) {
    hours = hours + doc.hours;
    minutes = minutes + doc.minutes;
  }

  if (minutes >= 60) {
    hours += Math.floor(minutes / 60);
    minutes %= 60;
  }
  return { hours, minutes };
};
