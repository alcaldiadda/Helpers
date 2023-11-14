"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isStructurallyEqual = void 0;
var isStructurallyEqual = function (obj1, obj2) {
    // If both are primitives or null/undefined
    if (obj1 === obj2)
        return true;
    // If either (but not both) are null/undefined
    if (!obj1 || !obj2)
        return false;
    // If both are not objects
    if (typeof obj1 !== "object" || typeof obj2 !== "object")
        return false;
    var keys1 = Object.keys(obj1);
    var keys2 = Object.keys(obj2);
    if (keys1.length !== keys2.length)
        return false;
    return keys1.every(function (key) { return (0, exports.isStructurallyEqual)(obj1[key], obj2[key]); });
};
exports.isStructurallyEqual = isStructurallyEqual;
//# sourceMappingURL=isStructurallyEqual.js.map