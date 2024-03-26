/**
 * Extracts unique keys from an array of objects.
 *
 * @param array An array of objects from which keys are to be extracted.
 * @returns An array of unique keys found in the objects.
 */
export const extractKeys = (
  array: { [key: string]: any }[]
): { [key: string]: any }[] => {
  const keys = array.reduce((acc: string[], obj) => {
    return acc.concat(Object.keys(obj));
  }, []);

  const uniqueKeys = Array.from(new Set(keys));

  if (uniqueKeys.length === 0) {
    return [];
  }

  return [Object.fromEntries(uniqueKeys.map((key) => [key, null]))];
};
