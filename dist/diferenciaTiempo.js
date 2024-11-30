"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.diferenciaTiempo = void 0;
/**
 * Calcula la diferencia en horas y minutos entre dos objetos DateTime
 * @param inicio fecha de inicio
 * @param fin fecha de fin
 * @returns objeto con la diferencia en horas y minutos
 */
function diferenciaTiempo(inicio, fin) {
    var diff = fin.diff(inicio, ["hours", "minutes"]).toObject();
    return {
        horas: Math.floor(diff.hours || 0),
        minutos: Math.floor(diff.minutes || 0),
    };
}
exports.diferenciaTiempo = diferenciaTiempo;
