import { Jornada, MarcacionBruta } from "./types";
/**
 * Obtiene el horario aplicable según la jerarquía:
 * 1. Jornada por usuario para fecha específica
 * 2. Jornada especial para la fecha
 * 3. Jornada por usuario para día de la semana
 * 4. Jornada regular para el día de la semana
 * @param marcacion - La marcación bruta
 * @param jornadas - Las jornadas de trabajo
 * @returns La jornada de trabajo
 */
export declare const obtieneJornadaDesdeFecha: (marcacion: MarcacionBruta, jornadas: Jornada[]) => Jornada | undefined;
