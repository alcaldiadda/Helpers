"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.obtieneJornadaDesdeFecha = void 0;
var obtenerDiaSemana_1 = require("./obtenerDiaSemana");
/**
 * Obtiene el horario aplicable según la jerarquía:
 * 1. Jornada por usuario para fecha específica
 * 2. Jornada especial para la fecha
 * 3. Jornada por usuario para día de la semana
 * 4. Jornada regular para el día de la semana
 * @param marcacion - La marcación bruta
 * @param jornadas - Las jornadas de trabajo
 * @returns La jornada de trabajo
 */
var obtieneJornadaDesdeFecha = function (marcacion, jornadas) {
    var diaSemana = (0, obtenerDiaSemana_1.obtenerDiaSemana)(marcacion.fecha).toLowerCase();
    return jornadas.find(function (jornada) {
        if (jornada.tipo === "usuario" &&
            jornada.id_usuario === marcacion.id_usuario) {
            return (jornada.fecha === marcacion.fecha || jornada.dia_semana === diaSemana);
        }
        if (jornada.tipo === "especial") {
            return jornada.fecha === marcacion.fecha;
        }
        if (jornada.tipo === "regular") {
            return jornada.dia_semana === diaSemana;
        }
        return false;
    });
};
exports.obtieneJornadaDesdeFecha = obtieneJornadaDesdeFecha;
