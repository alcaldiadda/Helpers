/**
 * Compares two objects to determine if they have the same properties with equal values.
 * This is a shallow comparison, meaning it only compares the properties one level deep.
 *
 * @param obj1 The first object to compare.
 * @param obj2 The second object to compare.
 * @returns A boolean indicating whether the two objects are equal. Returns true if both objects
 * have the same number of properties and all corresponding properties have equal values. Otherwise, returns false.
 */
export const isObjectEqual = (
  obj1: Record<string, any>,
  obj2: Record<string, any>
): boolean => {
  const obj1Keys = Object.keys(obj1);
  const obj2Keys = Object.keys(obj2);

  if (obj1Keys.length !== obj2Keys.length) {
    return false;
  }

  for (const key of obj1Keys) {
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }

  return true;
};
