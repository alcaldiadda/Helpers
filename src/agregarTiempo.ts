import { Duration } from "luxon";
import { ResultadoTiempo } from "./types";

/**
 * Le agrega tiempo a un objeto que contiene horas y minutos
 * desde otro objeto con los mismos atributos
 * @param tiempo1 objeto1 con hora y minutos
 * @param tiempo2 objeto2 con hora y minutos
 * @returns objeto con el resultado en horas y minutos
 */
export function agregarTiempo(
  tiempo1: ResultadoTiempo,
  tiempo2: ResultadoTiempo
): ResultadoTiempo {
  const duracion = Duration.fromObject({
    hours: tiempo1.horas + tiempo2.horas,
    minutes: tiempo1.minutos + tiempo2.minutos,
  }).normalize();
  return {
    horas: Math.floor(duracion.as("hours")),
    minutos: Math.floor(duracion.minutes),
  };
}