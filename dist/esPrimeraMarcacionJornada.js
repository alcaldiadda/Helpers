"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.esPrimeraMarcacionJornada = void 0;
/**
 * Función que determina si la primera marcación de la jornada es la fecha actual
 * @param {string} fechaActual - Fecha actual en formato "YYYY-MM-DD"
 * @param {string[]} historial - Historial de marcaciones en formato "YYYY-MM-DD"
 * @param {string} [iniciaJornada="07:00"] - Hora de inicio de la jornada en formato "HH:MM"
 * @returns {boolean} - Retorna true si la primera marcación es la fecha actual, false en caso contrario
 */
var esPrimeraMarcacionJornada = function (fechaActual, historial, iniciaJornada) {
    if (iniciaJornada === void 0) { iniciaJornada = "07:00"; }
    var inicioJornada = new Date(fechaActual);
    var _a = iniciaJornada.split(":").map(Number), horas = _a[0], minutos = _a[1];
    inicioJornada.setHours(horas, minutos, 0, 0);
    var fechaActualDate = new Date(fechaActual);
    // Validación: Si la fecha actual es antes de las 07:00 AM
    if (fechaActualDate < inicioJornada)
        return false;
    // Filtrar marcaciones después de las 07:00 AM, excluyendo la fecha actual
    var marcacionesJornada = historial
        .map(function (fecha) { return new Date(fecha); })
        .filter(function (fecha) {
        return fecha >= inicioJornada && fecha.getTime() !== fechaActualDate.getTime();
    });
    // Si no hay marcaciones después de las 07:00 AM, entonces la fecha actual es la primera
    return marcacionesJornada.length === 0;
};
exports.esPrimeraMarcacionJornada = esPrimeraMarcacionJornada;
