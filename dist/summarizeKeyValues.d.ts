/**
 * Counts the occurrences of keys in an array of objects.
 *
 * @param array An array of objects from which keys occurrences are to be counted.
 * @returns An object containing the count of occurrences for each key found in the objects.
 */
export declare const summarizeKeyValues: (array: {
    [key: string]: any;
}[]) => {
    [key: string]: number;
};
