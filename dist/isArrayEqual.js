"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isArrayEqual = void 0;
/**
 * Compares two arrays of objects to determine if they contain equivalent objects in the same order.
 * This is a shallow comparison, meaning it only compares the properties of the objects one level deep.
 *
 * @param arr1 The first array of objects to compare.
 * @param arr2 The second array of objects to compare.
 * @returns A boolean indicating whether the two arrays contain equivalent objects in the same order.
 */
var isArrayEqual = function (arr1, arr2) {
    // Check if both arrays are of the same length
    if (arr1.length !== arr2.length) {
        return false;
    }
    // Iterate through the arrays
    for (var i = 0; i < arr1.length; i++) {
        var obj1 = arr1[i];
        var obj2 = arr2[i];
        var obj1Keys = Object.keys(obj1);
        var obj2Keys = Object.keys(obj2);
        // Check if both objects have the same number of properties
        if (obj1Keys.length !== obj2Keys.length) {
            return false;
        }
        // Check if all properties in obj1 have equal values in obj2
        for (var _i = 0, obj1Keys_1 = obj1Keys; _i < obj1Keys_1.length; _i++) {
            var key = obj1Keys_1[_i];
            if (obj1[key] !== obj2[key]) {
                return false;
            }
        }
    }
    return true;
};
exports.isArrayEqual = isArrayEqual;
