"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeBlankValues = void 0;
var removeBlankValues = function (obj) {
    return Object.keys(obj).reduce(function (newObject, key) {
        if (obj[key] !== "") {
            newObject[key] = obj[key];
        }
        return newObject;
    }, {});
};
exports.removeBlankValues = removeBlankValues;
