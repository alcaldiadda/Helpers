"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Identification = void 0;
var Identification = /** @class */ (function () {
    function Identification(rut) {
        this.id = rut;
    }
    Identification.prototype.isValid = function () {
        if (typeof this.id !== "string") {
            return false;
        }
        // if it starts with 0 we return false
        // so a rut like 00000000-0 will not pass
        if (/^0+/.test(this.id)) {
            return false;
        }
        if (!/^0*(\d{1,3}(\.?\d{3})*)-?([\dkK])$/.test(this.id)) {
            return false;
        }
        this.clean();
        var t = parseInt(this.id.slice(0, -1), 10);
        var m = 0;
        var s = 1;
        while (t > 0) {
            s = (s + (t % 10) * (9 - (m++ % 6))) % 11;
            t = Math.floor(t / 10);
        }
        var v = s > 0 ? "" + (s - 1) : "K";
        return v === this.id.slice(-1);
    };
    Identification.prototype.format = function (options) {
        if (options === void 0) { options = { dots: true }; }
        this.clean();
        var result;
        if (options.dots) {
            result = this.id.slice(-4, -1) + "-" + this.id.substring(this.id.length - 1);
            for (var i = 4; i < this.id.length; i += 3) {
                result = this.id.slice(-3 - i, -i) + "." + result;
            }
        }
        else {
            result = this.id.slice(0, -1) + "-" + this.id.substring(this.id.length - 1);
        }
        return result;
    };
    Identification.prototype.getCheckDigit = function () {
        this.clean();
        var rut = Array.from(this.id, Number);
        if (rut.length === 0 || rut.includes(NaN)) {
            throw new Error("\"".concat(this.id, "\" as RUT is invalid"));
        }
        var modulus = 11;
        var initialValue = 0;
        var sumResult = rut
            .reverse()
            .reduce(function (accumulator, currentValue, index) { return accumulator + currentValue * ((index % 6) + 2); }, initialValue);
        var checkDigit = modulus - (sumResult % modulus);
        if (checkDigit === 10) {
            return "K";
        }
        else if (checkDigit === 11) {
            return "0";
        }
        else {
            return checkDigit.toString();
        }
    };
    Identification.prototype.clean = function () {
        this.id = this.id.replace(/^0+|[^0-9kK]+/g, "").toUpperCase();
        return this.id;
    };
    return Identification;
}());
exports.Identification = Identification;
