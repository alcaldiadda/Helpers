import { DateTime } from "luxon";

/**
 * Parsea la hora en formato string y devuelve un objeto DateTime
 * @param tiempoString
 * @returns Objeto DateTime
 */
export function parsearHora(
  tiempoString: string,
  zonaHoraria?: string,
  formato?: string
): DateTime {
  const formato_automatico =
    tiempoString.split(":").length === 3 ? "HH:mm:ss" : "HH:mm";
  return DateTime.fromFormat(tiempoString, formato || formato_automatico, {
    zone: zonaHoraria,
  });
}
