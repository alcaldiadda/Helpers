"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.extractKeys = void 0;
/**
 * Extracts unique keys from an array of objects.
 *
 * @param array An array of objects from which keys are to be extracted.
 * @returns An array of unique keys found in the objects.
 */
var extractKeys = function (array) {
    var keys = array.reduce(function (acc, obj) {
        return acc.concat(Object.keys(obj));
    }, []);
    var uniqueKeys = Array.from(new Set(keys));
    if (uniqueKeys.length === 0) {
        return [];
    }
    return [Object.fromEntries(uniqueKeys.map(function (key) { return [key, null]; }))];
};
exports.extractKeys = extractKeys;
