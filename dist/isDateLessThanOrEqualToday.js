"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isDateLessThanOrEqualToday = void 0;
var luxon_1 = require("luxon");
var isDateLessThanOrEqualToday = function (dateString) {
    var today = luxon_1.DateTime.local().startOf("day");
    var dateToCheck = luxon_1.DateTime.fromISO(dateString).startOf("day");
    return dateToCheck <= today;
};
exports.isDateLessThanOrEqualToday = isDateLessThanOrEqualToday;
//# sourceMappingURL=isDateLessThanOrEqualToday.js.map