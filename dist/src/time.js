"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isDateValid = exports.formatRelativeDateFromISO = exports.formatRelativeDate = exports.formatDateTimeFromJS = exports.formatDateTimeFromISO = exports.formatDateTimeFromMillis = exports.DEFAULT_TIME_FORMAT = exports.DEFAULT_DATE_FORMAT = exports.DEFAULT_DATETIME_FORMAT = void 0;
var luxon_1 = require("luxon");
var constants_1 = require("./constants");
exports.DEFAULT_DATETIME_FORMAT = "ccc dd 'de' MMMM '-' HH:mm";
exports.DEFAULT_DATE_FORMAT = "dd 'de' MMMM 'del' yyyy";
exports.DEFAULT_TIME_FORMAT = "HH:mm";
var formatDateTimeFromMillis = function (millis, format) {
    if (format === void 0) { format = exports.DEFAULT_DATETIME_FORMAT; }
    return (luxon_1.DateTime.fromMillis(millis * 1000)
        .setLocale("es-CL")
        .setZone(constants_1.TIMEZONE)
        .toFormat(format) || "");
};
exports.formatDateTimeFromMillis = formatDateTimeFromMillis;
var formatDateTimeFromISO = function (iso, format) {
    if (format === void 0) { format = exports.DEFAULT_DATETIME_FORMAT; }
    return luxon_1.DateTime.fromISO(iso).setLocale("es-CL").setZone(constants_1.TIMEZONE).toFormat(format) || "";
};
exports.formatDateTimeFromISO = formatDateTimeFromISO;
var formatDateTimeFromJS = function (date, format) {
    if (format === void 0) { format = exports.DEFAULT_DATETIME_FORMAT; }
    return luxon_1.DateTime.fromJSDate(date).setLocale("es-CL").setZone(constants_1.TIMEZONE).toFormat(format) || "";
};
exports.formatDateTimeFromJS = formatDateTimeFromJS;
var formatRelativeDate = function (millis, format) {
    if (format === void 0) { format = exports.DEFAULT_DATETIME_FORMAT; }
    return luxon_1.DateTime.fromMillis(millis).setLocale("es-CL").setZone(constants_1.TIMEZONE).toFormat(format) || "";
};
exports.formatRelativeDate = formatRelativeDate;
var formatRelativeDateFromISO = function (iso) {
    return luxon_1.DateTime.fromISO(iso).setLocale("es-CL").setZone(constants_1.TIMEZONE).toRelative() || "";
};
exports.formatRelativeDateFromISO = formatRelativeDateFromISO;
var isDateValid = function (iso) { return luxon_1.DateTime.fromISO(iso).isValid; };
exports.isDateValid = isDateValid;
