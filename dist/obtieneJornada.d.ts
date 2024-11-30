import { Jornada, MarcacionBruta } from "./types";
/**
 * Obtiene la jornada de trabajo para una fecha y usuario específico
 * @param marcacion - La marcación bruta
 * @param jornadas - Las jornadas de trabajo
 * @returns La jornada de trabajo
 */
export declare const obtieneJornadaDesdeFecha: (marcacion: MarcacionBruta, jornadas: Jornada[]) => Jornada | undefined;
