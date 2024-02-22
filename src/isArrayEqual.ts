/**
 * Compares two arrays of objects to determine if they contain equivalent objects in the same order.
 * This is a shallow comparison, meaning it only compares the properties of the objects one level deep.
 *
 * @param arr1 The first array of objects to compare.
 * @param arr2 The second array of objects to compare.
 * @returns A boolean indicating whether the two arrays contain equivalent objects in the same order.
 */
export const isArrayEqual = (
  arr1: Record<string, any>[],
  arr2: Record<string, any>[]
): boolean => {
  // Check if both arrays are of the same length
  if (arr1.length !== arr2.length) {
    return false;
  }

  // Iterate through the arrays
  for (let i = 0; i < arr1.length; i++) {
    const obj1 = arr1[i];
    const obj2 = arr2[i];
    const obj1Keys = Object.keys(obj1);
    const obj2Keys = Object.keys(obj2);

    // Check if both objects have the same number of properties
    if (obj1Keys.length !== obj2Keys.length) {
      return false;
    }

    // Check if all properties in obj1 have equal values in obj2
    for (const key of obj1Keys) {
      if (obj1[key] !== obj2[key]) {
        return false;
      }
    }
  }

  return true;
};
