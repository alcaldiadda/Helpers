"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dividirFecha = void 0;
/**
 * Divide una fecha en formato DateTime en fecha y hora
 * @param fecha - La fecha a dividir
 * @returns Un array con la fecha y la hora en formato YYYY-MM-DD y HH:mm
 */
var dividirFecha = function (fecha) {
    // Construir la fecha en formato YYYY-MM-DD
    var mes = String(fecha.month).padStart(2, "0");
    var dia = String(fecha.day).padStart(2, "0");
    var fechaFormateada = "".concat(fecha.year, "-").concat(mes, "-").concat(dia);
    // Construir la hora en formato HH:mm
    var hora = String(fecha.hour).padStart(2, "0");
    var minuto = String(fecha.minute).padStart(2, "0");
    var horaFormateada = "".concat(hora, ":").concat(minuto);
    return [fechaFormateada, horaFormateada];
};
exports.dividirFecha = dividirFecha;
