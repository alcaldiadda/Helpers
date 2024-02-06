"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFirstWord = void 0;
/**
 * Given a full text string returns always the first word
 * @param fulltext text with multiples words
 * @returns string with the first word or an empty string
 */
var getFirstWord = function (fulltext) {
    var first = fulltext.split(" ")[0];
    if (first) {
        return first;
    }
    return "";
};
exports.getFirstWord = getFirstWord;
