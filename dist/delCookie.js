"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.delCookie = void 0;
var delCookie = function (name) {
    document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:01 GMT;";
};
exports.delCookie = delCookie;
