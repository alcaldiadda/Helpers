/**
 * Compares two arrays of objects to determine if they contain equivalent objects in the same order.
 * This is a shallow comparison, meaning it only compares the properties of the objects one level deep.
 *
 * @param arr1 The first array of objects to compare.
 * @param arr2 The second array of objects to compare.
 * @returns A boolean indicating whether the two arrays contain equivalent objects in the same order.
 */
export declare const isArrayEqual: (arr1: Record<string, any>[], arr2: Record<string, any>[]) => boolean;
