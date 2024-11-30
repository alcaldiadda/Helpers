import { obtenerDiaSemana } from "./obtenerDiaSemana";
import { Jornada, MarcacionBruta } from "./types";

/**
 * Obtiene la jornada de trabajo para una fecha y usuario específico
 * @param marcacion - La marcación bruta
 * @param jornadas - Las jornadas de trabajo
 * @returns La jornada de trabajo
 */
export const obtieneJornadaDesdeFecha = (
  marcacion: MarcacionBruta,
  jornadas: Jornada[]
) => {
  const diaSemana = obtenerDiaSemana(marcacion.fecha).toLowerCase();
  return jornadas.find((jornada) => {
    if (
      jornada.tipo === "usuario" &&
      jornada.id_usuario === marcacion.id_usuario
    ) {
      return (
        jornada.fecha === marcacion.fecha || jornada.dia_semana === diaSemana
      );
    }
    if (jornada.tipo === "especial") {
      return jornada.fecha === marcacion.fecha;
    }
    if (jornada.tipo === "regular") {
      return jornada.dia_semana === diaSemana;
    }
    return false;
  });
};
