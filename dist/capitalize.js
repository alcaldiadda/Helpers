"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.capitalize = void 0;
/*
  capitalize the given text
*/
var capitalize = function (text) {
    return text
        .toLocaleLowerCase()
        .split(" ")
        .map(function (word) { return word.charAt(0).toUpperCase() + word.slice(1); })
        .join(" ");
};
exports.capitalize = capitalize;
//# sourceMappingURL=capitalize.js.map