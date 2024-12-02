import { DateTime } from "luxon";
/**
 * Divide una fecha en formato DateTime en fecha y hora
 * @param fecha - La fecha a dividir
 * @returns Un array con la fecha y la hora en formato YYYY-MM-DD y HH:mm
 */
export declare const dividirFecha: (fecha: DateTime) => string[];
