"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidPid = void 0;
var Identification_1 = require("./Identification");
var isValidPid = function (value) {
    var values = Array.isArray(value) ? value : [value];
    for (var i = 0; i < values.length; i++) {
        var _a = values[i].split(":"), pid = _a[0], pidValue = _a[1];
        if (pid !== "pid") {
            continue;
        }
        if (pidValue.length === 0) {
            return "Debes ingresar un RUT";
        }
        if (pidValue === undefined || pidValue.length === 0) {
            return "Debes ingresar un valor para el PID";
        }
        var rut = new Identification_1.Identification(pidValue);
        if (!rut.isValid()) {
            return "El PID ingresado no es válido";
        }
    }
    return null;
};
exports.isValidPid = isValidPid;
