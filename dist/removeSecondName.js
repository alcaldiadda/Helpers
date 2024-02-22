"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeSecondName = void 0;
/**
 * Removes the middle name(s) from a full name string, leaving only the first name and the last two elements of the name,
 * which are assumed to be the surnames. This function is designed for names formatted with multiple parts, typically
 * including one or more given names followed by two surnames. It splits the full name into an array, isolates the first
 * element (the first name) and the last two elements (the surnames), and then rejoins these selected parts into a single
 * string. This is particularly useful in contexts where only the first and last names (surnames) are needed or preferred.
 * @param fullname A string representing a person's full name, which can include multiple given names and surnames.
 * @returns A string composed of the person's first name and their last two names (assumed to be surnames).
 */
var removeSecondName = function (fullname) {
    var array = fullname.split(" ");
    var name = array[0];
    var surnames = array.slice(-2);
    return "".concat(name, " ").concat(surnames.join(" "));
};
exports.removeSecondName = removeSecondName;
