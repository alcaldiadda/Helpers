import { DateTime } from "luxon";
import { ResultadoTiempo } from "./types";
/**
 * Calcula la diferencia en horas y minutos entre dos objetos DateTime
 * @param inicio fecha de inicio
 * @param fin fecha de fin
 * @returns objeto con la diferencia en horas y minutos
 */
export declare function diferenciaTiempo(inicio: DateTime, fin: DateTime): ResultadoTiempo;
