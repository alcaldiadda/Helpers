"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateColorsFromTime = void 0;
/**
 * Calculates the color indicator based on the provided date and validation properties.
 * @param {string} dateFromString - The date string from which to calculate the difference in days.
 * @param {ValidationProps[]} properties - An array of validation properties containing validators and corresponding colors.
 * @returns {IndicatorProps} - An object representing the color indicator along with processing status and days difference.
 */
var calculateColorsFromTime = function (_a) {
    var dateFromString = _a.dateFromString, properties = _a.properties;
    var createdAt = new Date(dateFromString);
    var currentDate = new Date();
    var differenceInDays = Math.floor((currentDate.getTime() - createdAt.getTime()) / (1000 * 60 * 60 * 24));
    for (var _i = 0, properties_1 = properties; _i < properties_1.length; _i++) {
        var _b = properties_1[_i], validator = _b.validator, color = _b.color, processing = _b.processing;
        if (validator(differenceInDays)) {
            return { color: color, processing: !!processing, days: differenceInDays };
        }
    }
    return { color: "gray", processing: false, days: differenceInDays };
};
exports.calculateColorsFromTime = calculateColorsFromTime;
