"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.summarizeHoursMinutes = void 0;
var summarizeHoursMinutes = function (docs) {
    var hours = 0;
    var minutes = 0;
    for (var _i = 0, docs_1 = docs; _i < docs_1.length; _i++) {
        var doc = docs_1[_i];
        hours = hours + doc.hours;
        minutes = minutes + doc.minutes;
    }
    if (minutes >= 60) {
        hours += Math.floor(minutes / 60);
        minutes %= 60;
    }
    return { hours: hours, minutes: minutes };
};
exports.summarizeHoursMinutes = summarizeHoursMinutes;
