"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.obtenerDiaSemana = void 0;
/**
 * Función que obtiene el día de la semana de una fecha
 * @param {string} fecha - Fecha en formato "YYYY-MM-DD"
 * @returns {string} - Retorna el día de la semana en formato "domingo", "lunes", etc.
 */
var obtenerDiaSemana = function (fecha) {
    var _fecha = new Date(fecha);
    _fecha.setHours(0);
    var diasSemana = [
        "domingo",
        "lunes",
        "martes",
        "miercoles",
        "jueves",
        "viernes",
        "sabado",
    ];
    return diasSemana[_fecha.getUTCDay()];
};
exports.obtenerDiaSemana = obtenerDiaSemana;
