/**
 * Counts the occurrences of keys in an array of objects.
 *
 * @param array An array of objects from which keys occurrences are to be counted.
 * @returns An object containing the count of occurrences for each key found in the objects.
 */
export const summarizeKeyValues = (
  array: { [key: string]: any }[]
): { [key: string]: number } => {
  const counts: { [key: string]: number } = {};

  array.forEach((obj) => {
    Object.keys(obj).forEach((key) => {
      counts[key] = (counts[key] || 0) + 1; // Incrementar el recuento para la clave encontrada
    });
  });

  return counts;
};
