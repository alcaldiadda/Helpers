/**
 * Gets the UTC hours and minutes and converted to minutes
 * @param datetime string datetime to be converted
 * @returns number - minutes since midnight
 */
export const minutesSinceMidnight = (datetime: string) => {
  const dateTime = new Date(datetime);
  const hours = dateTime.getUTCHours();
  const minutes = dateTime.getUTCMinutes();
  return hours * 60 + minutes;
};
