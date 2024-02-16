"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeLeftZero = void 0;
var removeLeftZero = function (valor) {
    return valor.replace(/^0+/, "");
};
exports.removeLeftZero = removeLeftZero;
