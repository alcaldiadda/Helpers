export const isStructurallyEqual = (obj1: Record<string, any>, obj2: Record<string, any>): boolean => {
  // If both are primitives or null/undefined
  if (obj1 === obj2) return true;

  // If either (but not both) are null/undefined
  if (!obj1 || !obj2) return false;

  // If both are not objects
  if (typeof obj1 !== "object" || typeof obj2 !== "object") return false;

  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) return false;

  return keys1.every((key) => isStructurallyEqual(obj1[key], obj2[key]));
};
