import { DateTime } from "luxon";
/**
 * Calcula los intervalos de tiempo de una jornada.
 * Una jornada termina a las 6:00 AM del día siguiente.
 *
 * @param {DateTime} fecha - Objeto DateTime de luxon.
 * @returns {Object} - Intervalos de tiempo { inicioJornada, finJornada }.
 */
export declare const calcularIntervaloJornada: (fecha: DateTime) => {
    inicio_jornada: DateTime<boolean>;
    fin_jornada: DateTime<boolean>;
};
