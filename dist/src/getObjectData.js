"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getObjectData = void 0;
/**
 * Gets value from an array of object
 * @param key key to compare date in the array
 * @param value value search
 * @param array array where to search
 * @returns string or object in array
 */
var getObjectData = function (key, value, array) {
    return (array === null || array === void 0 ? void 0 : array.find(function (item) { return item[key] === value; })) || value;
};
exports.getObjectData = getObjectData;
