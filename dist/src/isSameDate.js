"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isSameDate = void 0;
var isSameDate = function (date1, dateArray) {
    var parsedDate1 = new Date(date1);
    for (var _i = 0, dateArray_1 = dateArray; _i < dateArray_1.length; _i++) {
        var date2 = dateArray_1[_i];
        var parsedDate2 = new Date(date2);
        if (parsedDate1.getUTCFullYear() === parsedDate2.getUTCFullYear() &&
            parsedDate1.getUTCMonth() === parsedDate2.getUTCMonth() &&
            parsedDate1.getUTCDate() === parsedDate2.getUTCDate()) {
            return true;
        }
    }
    return false;
};
exports.isSameDate = isSameDate;
