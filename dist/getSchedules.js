"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSchedules = void 0;
var luxon_1 = require("luxon");
/*
  Given a date, determine what are the schedules in a array of schedules
  If you give xxxxx/xx/xx and for that date the weekday is monday, and in
  the schedule there is an schedule for that day it will return an array with

  name: string;
  type: string;
  dayStart: number;
  dayEnd: number;
  time: {
    start: string;
    end: string;
  };
*/
var getSchedules = function (date, type, schedules) {
    var weekday = luxon_1.DateTime.fromISO(date).weekday;
    var result = schedules.filter(function (schedule) {
        return schedule.type.startsWith(type) &&
            weekday >= schedule.dayStart &&
            weekday <= schedule.dayEnd;
    });
    return result;
};
exports.getSchedules = getSchedules;
//# sourceMappingURL=getSchedules.js.map