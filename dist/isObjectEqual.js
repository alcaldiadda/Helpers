"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isObjectEqual = void 0;
/**
 * Compares two objects to determine if they have the same properties with equal values.
 * This is a shallow comparison, meaning it only compares the properties one level deep.
 *
 * @param obj1 The first object to compare.
 * @param obj2 The second object to compare.
 * @returns A boolean indicating whether the two objects are equal. Returns true if both objects
 * have the same number of properties and all corresponding properties have equal values. Otherwise, returns false.
 */
var isObjectEqual = function (obj1, obj2) {
    var obj1Keys = Object.keys(obj1);
    var obj2Keys = Object.keys(obj2);
    if (obj1Keys.length !== obj2Keys.length) {
        return false;
    }
    for (var _i = 0, obj1Keys_1 = obj1Keys; _i < obj1Keys_1.length; _i++) {
        var key = obj1Keys_1[_i];
        if (obj1[key] !== obj2[key]) {
            return false;
        }
    }
    return true;
};
exports.isObjectEqual = isObjectEqual;
