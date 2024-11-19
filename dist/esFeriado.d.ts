/**
 * Función que determina si una fecha es feriado
 * @param {string} fecha - Fecha en formato "YYYY-MM-DD"
 * @param {string[]} [feriados] - Lista de feriados en formato "YYYY-MM-DD"
 * @returns {boolean} - Retorna true si la fecha es feriado, false en caso contrario
 */
export declare const esFeriado: (fecha: string, feriados?: string[]) => boolean;
