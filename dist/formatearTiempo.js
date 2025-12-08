"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatearTiempo = formatearTiempo;
var luxon_1 = require("luxon");
/**
 * Devuelve la hora y los minutos de un objeto DateTime
 * @param fecha objeto DateTime a formatear
 * @returns string con la hora y minutos de la fecha dada
 */
function formatearTiempo(fechaIso, opciones) {
    return luxon_1.DateTime.fromISO(fechaIso, opciones).toFormat("HH:mm");
}
