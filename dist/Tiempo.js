"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tiempo = void 0;
var ms = {
    segundos: function (cantidad) { return cantidad * 1000; },
    minutos: function (cantidad) { return cantidad * 1000 * 60; },
    horas: function (cantidad) { return cantidad * 1000 * 60 * 60; },
    dias: function (cantidad) { return cantidad * 1000 * 60 * 60 * 24; },
};
exports.Tiempo = {
    ms: ms,
    segundo: function (cantidad) { return cantidad; },
};
