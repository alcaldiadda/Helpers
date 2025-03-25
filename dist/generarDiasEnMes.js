"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generarDiasEnMes = void 0;
var luxon_1 = require("luxon");
/**
 * Genera un array con objetos DateTime de Luxon para cada día del mes especificado,
 * excluyendo sábados y domingos si el parámetro incluirFinSemana es false.
 *
 * @param anio - El año (ejemplo: 2024)
 * @param mes - El mes (1-12, donde 1 es enero)
 * @param incluirFinSemana - Booleano que indica si se deben incluir sábados y domingos (opcional, por defecto false)
 * @returns Array de objetos DateTime, uno para cada día del mes especificado
 * @example
 * const diasEnero = generarDiasEnMes(2024, 1, true); // Incluye fines de semana
 * const diasLaboralesEnero = generarDiasEnMes(2024, 1); // Excluye sábados y domingos
 */
var generarDiasEnMes = function (anio, mes, incluirFinSemana) {
    if (incluirFinSemana === void 0) { incluirFinSemana = false; }
    var primerDiaDelMes = luxon_1.DateTime.fromObject({
        year: anio,
        month: mes,
        day: 1,
    });
    var ultimoDia = primerDiaDelMes.endOf("month").day;
    return Array.from({ length: ultimoDia }, function (_, i) {
        var fecha = luxon_1.DateTime.fromObject({ year: anio, month: mes, day: i + 1 });
        // Excluir sábados (6) y domingos (7) si incluirFinSemana es false
        if (!incluirFinSemana && (fecha.weekday === 6 || fecha.weekday === 7)) {
            return null;
        }
        return fecha;
    }).filter(Boolean); // Filtra días nulos
};
exports.generarDiasEnMes = generarDiasEnMes;
