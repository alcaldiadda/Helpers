"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertirHoraAMinutos = void 0;
// Función auxiliar para convertir hora en formato "HH:mm" a minutos
var convertirHoraAMinutos = function (hora) {
    if (!hora) {
        return 0;
    }
    var _a = hora.split(":").map(Number), horas = _a[0], minutos = _a[1];
    return horas * 60 + minutos;
};
exports.convertirHoraAMinutos = convertirHoraAMinutos;
