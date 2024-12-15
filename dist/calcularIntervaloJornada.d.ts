import { DateTime } from "luxon";
/**
 * Calcula los intervalos de tiempo de una jornada.
 * Una jornada termina a las 6:00 AM del día siguiente.
 *
 * @param {string} fecha_string - Fecha en formato string.
 * @param {string} zona_horaria - Zona horaria a usar.
 * @returns {Object} - Intervalos de tiempo { inicioJornada, finJornada }.
 */
export declare const calcularIntervaloJornada: (fecha_string: string, zona_horaria: string) => {
    inicio_jornada: DateTime;
    fin_jornada: DateTime;
};
