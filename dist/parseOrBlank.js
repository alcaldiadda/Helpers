"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseOrBlank = void 0;
var parseOrBlank = function (_a) {
    var value = _a.value, isDate = _a.isDate;
    if (!value) {
        return "";
    }
    if (isDate) {
        return new Date(value);
    }
    return value;
};
exports.parseOrBlank = parseOrBlank;
