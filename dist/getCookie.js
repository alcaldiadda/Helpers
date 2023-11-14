"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCookie = void 0;
var getCookie = function (name) {
    var _a;
    var value = "; ".concat(document.cookie);
    var parts = value.split("; ".concat(name, "="));
    if (parts.length === 2)
        return (_a = parts.pop()) === null || _a === void 0 ? void 0 : _a.split(";").shift();
};
exports.getCookie = getCookie;
