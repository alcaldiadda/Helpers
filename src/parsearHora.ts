import { DateTime } from "luxon";

/**
 * Parsea la hora en formato string y devuelve un objeto DateTime
 * @param tiempoString
 * @returns Objeto DateTime
 */
export function parsearHora(tiempoString: string): DateTime {
  return DateTime.fromFormat(tiempoString, "HH:mm");
}
