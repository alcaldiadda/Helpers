"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.extractError = void 0;
var extractError = function (strError) {
    var re = new RegExp("Error: ([a-zA-Z_]*)\n");
    try {
        return strError.match(re)[1];
    }
    catch (_a) {
        return "undefined";
    }
};
exports.extractError = extractError;
//# sourceMappingURL=extractError.js.map