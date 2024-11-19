"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.esFeriado = void 0;
/**
 * Función que determina si una fecha es feriado
 * @param {string} fecha - Fecha en formato "YYYY-MM-DD"
 * @param {string[]} [feriados] - Lista de feriados en formato "YYYY-MM-DD"
 * @returns {boolean} - Retorna true si la fecha es feriado, false en caso contrario
 */
var esFeriado = function (fecha, feriados) {
    var _a = fecha.split("-").map(Number), anio = _a[0], mes = _a[1], dia = _a[2];
    var fechaObj = new Date(anio, mes - 1, dia);
    var diaSemana = fechaObj.getDay();
    var esFinDeSemana = diaSemana === 0 || diaSemana === 6; // 0 = Domingo, 6 = Sábado
    var fechaISO = fechaObj.toISOString().split("T")[0]; // Convierte a formato "aaa-mm-dd"
    // Verifica si es fin de semana o si está en la lista de feriados
    return esFinDeSemana || Boolean(feriados === null || feriados === void 0 ? void 0 : feriados.includes(fechaISO));
};
exports.esFeriado = esFeriado;
