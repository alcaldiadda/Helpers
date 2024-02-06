"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getinitials = void 0;
/**
 * Gets the first character from a text.
 *
 * eg. getInitials("Hello World", 2) will return HW
 *
 * @param text full string text
 * @param characters number of initials to return
 * @returns
 */
var getinitials = function (text, characters) {
    if (characters === void 0) { characters = 2; }
    var words = text.split(" ");
    var initials = words.reduce(function (acc, word, index) {
        if (index < characters) {
            acc += word[0].toUpperCase();
        }
        return acc;
    }, "");
    return initials;
};
exports.getinitials = getinitials;
