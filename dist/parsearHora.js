"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parsearHora = parsearHora;
var luxon_1 = require("luxon");
/**
 * Parsea la hora en formato string y devuelve un objeto DateTime
 * @param tiempoString
 * @returns Objeto DateTime
 */
function parsearHora(tiempoString, zonaHoraria, formato) {
    var formato_automatico = tiempoString.split(":").length === 3 ? "HH:mm:ss" : "HH:mm";
    return luxon_1.DateTime.fromFormat(tiempoString, formato || formato_automatico, {
        zone: zonaHoraria,
    });
}
