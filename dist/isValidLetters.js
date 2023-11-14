"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidLetters = void 0;
var isValidLetters = function (text) {
    return /^[A-Za-záéíóúÁÉÍÓÚñÑ\s]*$/.test(text);
};
exports.isValidLetters = isValidLetters;
//# sourceMappingURL=isValidLetters.js.map