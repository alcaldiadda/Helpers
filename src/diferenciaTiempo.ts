import { DateTime } from "luxon";
import { ResultadoTiempo } from "./types";

/**
 * Calcula la diferencia en horas y minutos entre dos objetos DateTime
 * @param inicio fecha de inicio
 * @param fin fecha de fin
 * @returns objeto con la diferencia en horas y minutos
 */
export function diferenciaTiempo(
  inicio: DateTime,
  fin: DateTime
): ResultadoTiempo {
  const diff = fin.diff(inicio, ["hours", "minutes"]).toObject();
  return {
    horas: Math.floor(diff.hours || 0),
    minutos: Math.floor(diff.minutes || 0),
  };
}
