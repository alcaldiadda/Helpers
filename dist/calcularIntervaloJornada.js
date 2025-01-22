"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calcularIntervaloJornada = void 0;
/**
 * Calcula los intervalos de tiempo de una jornada.
 * Una jornada termina a las 6:00 AM del día siguiente.
 *
 * @param {DateTime} fecha - Objeto DateTime de luxon.
 * @returns {Object} - Intervalos de tiempo { inicioJornada, finJornada }.
 */
var calcularIntervaloJornada = function (fecha) {
    // Inicio del día actual
    var inicio_jornada = fecha.startOf("day");
    // Fin de la jornada actual (06:00 AM del día actual)
    var fin_jornada = fecha.set({
        hour: 6,
        minute: 0,
        second: 0,
        millisecond: 0,
    });
    // Verifica si la fecha pertenece al rango de la jornada anterior
    var pertenece_jornada_anterior = fecha >= inicio_jornada && fecha <= fin_jornada;
    if (pertenece_jornada_anterior) {
        // Ajustar el intervalo a la jornada anterior
        inicio_jornada = fin_jornada.minus({ days: 1 });
    }
    else {
        // Ajustar el fin de la jornada al día siguiente
        fin_jornada = fin_jornada.plus({ days: 1 });
    }
    return {
        inicio_jornada: inicio_jornada,
        fin_jornada: fin_jornada,
    };
};
exports.calcularIntervaloJornada = calcularIntervaloJornada;
