"use strict";
/**
 * Función que determina si una fecha es feriado
 * @param {string} fecha - Fecha en formato "YYYY-MM-DD"
 * @param {string[]} [feriados] - Lista de feriados en formato "YYYY-MM-DD"
 * @returns {boolean} - Retorna true si la fecha es feriado, false en caso contrario
 */
var esFeriado = function (fecha, feriados) {
    var fechaObj = new Date(fecha);
    var diaSemana = fechaObj.getDay();
    var esFinDeSemana = diaSemana === 0 || diaSemana === 6; // 0 = Domingo, 6 = Sábado
    var fechaISO = fechaObj.toISOString().split("T")[0]; // Convierte a formato "aaa-mm-dd"
    var esFeriado = Boolean(feriados === null || feriados === void 0 ? void 0 : feriados.includes(fechaISO));
    // Verifica si es fin de semana o si está en la lista de feriados
    return esFinDeSemana || esFeriado;
};
