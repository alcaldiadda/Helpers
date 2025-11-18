"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatearTiempo = formatearTiempo;
/**
 * Devuelve la hora y los minutos de un objeto DateTime
 * @param fecha objeto DateTime a formatear
 * @returns string con la hora y minutos de la fecha dada
 */
function formatearTiempo(fecha) {
    return fecha.toFormat("HH:mm");
}
