"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.minutesSinceMidnight = void 0;
/**
 * Gets the UTC hours and minutes and converted to minutes
 * @param datetime string datetime to be converted
 * @returns number - minutes since midnight
 */
var minutesSinceMidnight = function (datetime) {
    var dateTime = new Date(datetime);
    var hours = dateTime.getUTCHours();
    var minutes = dateTime.getUTCMinutes();
    return hours * 60 + minutes;
};
exports.minutesSinceMidnight = minutesSinceMidnight;
