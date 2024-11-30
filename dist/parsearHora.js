"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parsearHora = void 0;
var luxon_1 = require("luxon");
/**
 * Parsea la hora en formato string y devuelve un objeto DateTime
 * @param tiempoString
 * @returns Objeto DateTime
 */
function parsearHora(tiempoString) {
    return luxon_1.DateTime.fromFormat(tiempoString, "HH:mm");
}
exports.parsearHora = parsearHora;
