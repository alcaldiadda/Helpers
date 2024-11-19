/**
 * Función que determina si la primera marcación de la jornada es la fecha actual
 * @param {string} fechaActual - Fecha actual en formato "YYYY-MM-DD"
 * @param {string[]} historial - Historial de marcaciones en formato "YYYY-MM-DD"
 * @param {string} [iniciaJornada="07:00"] - Hora de inicio de la jornada en formato "HH:MM"
 * @returns {boolean} - Retorna true si la primera marcación es la fecha actual, false en caso contrario
 */
export declare const esPrimeraMarcacionJornada: (fechaActual: string, historial: string[], iniciaJornada?: string) => boolean;
