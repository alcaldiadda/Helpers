"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.summarizeKeyValues = void 0;
/**
 * Counts the occurrences of keys in an array of objects.
 *
 * @param array An array of objects from which keys occurrences are to be counted.
 * @returns An object containing the count of occurrences for each key found in the objects.
 */
var summarizeKeyValues = function (array) {
    var counts = {};
    array.forEach(function (obj) {
        Object.keys(obj).forEach(function (key) {
            counts[key] = (counts[key] || 0) + 1; // Incrementar el recuento para la clave encontrada
        });
    });
    return counts;
};
exports.summarizeKeyValues = summarizeKeyValues;
