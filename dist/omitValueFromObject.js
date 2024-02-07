"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.omitValueFromObject = void 0;
var omitValueFromObject = function (_a) {
    var source = _a.source, omitKeys = _a.omitKeys, _b = _a.omitNull, omitNull = _b === void 0 ? false : _b;
    var result = {};
    Object.entries(source).forEach(function (_a) {
        var key = _a[0], value = _a[1];
        var shouldOmitKey = omitKeys.includes(key);
        var shouldOmitNull = omitNull && value === null;
        if (!shouldOmitKey && !shouldOmitNull) {
            result[key] = value;
        }
    });
    return result;
};
exports.omitValueFromObject = omitValueFromObject;
