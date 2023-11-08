"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setCookie = void 0;
var setCookie = function (domain, name, value, hours, isSecure) {
    var date = new Date();
    date.setTime(date.getTime() + hours * 60 * 60 * 1000);
    var expires = "expires=".concat(date.toUTCString());
    var domainScope = domain ? "domain=".concat(domain, ";") : "";
    var secure = isSecure ? "secure" : "";
    var path = "path=/";
    if (typeof window !== "undefined") {
        window.document.cookie = "".concat(name, "=").concat(value, "; ").concat(expires, "; ").concat(domainScope, " ").concat(path, "; ").concat(secure);
    }
};
exports.setCookie = setCookie;
