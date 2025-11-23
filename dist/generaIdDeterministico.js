"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generarIdDeterministico = void 0;
/**
 * Genera un ID determinístico a partir de prefijo + id_identidad + fecha.
 *
 * @param props.prefijo      Prefijo fijo para el ID.
 * @param props.id_identidad Identificador único de la identidad.
 * @param props.fecha        Fecha completa o parcial usada en el hash.
 * @param props.longitud     Largo final del ID (default: 20).
 *
 * @returns ID determinístico en base36 con la longitud indicada.
 */
var generarIdDeterministico = function (props) { return __awaiter(void 0, void 0, void 0, function () {
    var text, input, encoder, data, hashBuffer, hashHex, hashBase36;
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                if (props.id_identidad && props.fecha) {
                    throw new Error("FECHA_Y_ID_VACIOS");
                }
                text = [props.prefijo];
                if (props.id_identidad) {
                    text.push(props.id_identidad);
                }
                if (props.fecha) {
                    text.push(props.fecha);
                }
                input = text.join("-");
                encoder = new TextEncoder();
                data = encoder.encode(input);
                return [4 /*yield*/, crypto.subtle.digest("SHA-256", data)];
            case 1:
                hashBuffer = _b.sent();
                hashHex = Array.from(new Uint8Array(hashBuffer))
                    .map(function (b) { return b.toString(16).padStart(2, "0"); })
                    .join("");
                hashBase36 = BigInt("0x" + hashHex).toString(36);
                // retorna exactamente 36 caracteres
                return [2 /*return*/, hashBase36.slice(0, (_a = props.longitud) !== null && _a !== void 0 ? _a : 20)];
        }
    });
}); };
exports.generarIdDeterministico = generarIdDeterministico;
