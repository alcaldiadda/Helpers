/**
 * Gets value from an array of object
 * @param key key to compare date in the array
 * @param value value search
 * @param array array where to search
 * @returns string or object in array
 */
export const getObjectData = (key: string, value: string, array?: any[]) => {
  return array?.find((item) => item[key] === value) || value;
};
