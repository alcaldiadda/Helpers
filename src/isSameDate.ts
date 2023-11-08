export const isSameDate = (date1: string, dateArray: string[]): boolean => {
  const parsedDate1 = new Date(date1);

  for (let date2 of dateArray) {
    const parsedDate2 = new Date(date2);

    if (
      parsedDate1.getUTCFullYear() === parsedDate2.getUTCFullYear() &&
      parsedDate1.getUTCMonth() === parsedDate2.getUTCMonth() &&
      parsedDate1.getUTCDate() === parsedDate2.getUTCDate()
    ) {
      return true;
    }
  }

  return false;
};
