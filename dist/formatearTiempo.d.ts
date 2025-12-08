import { DateTimeOptions } from "luxon";
/**
 * Devuelve la hora y los minutos de un objeto DateTime
 * @param fecha objeto DateTime a formatear
 * @returns string con la hora y minutos de la fecha dada
 */
export declare function formatearTiempo(fechaIso: string, opciones?: DateTimeOptions): string;
