import { obtenerDiaSemana } from "./obtenerDiaSemana";
import { JornadaProps, MarcacionBruta } from "./types";

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
export const obtieneJornadaDesdeFecha = (
  marcacion: MarcacionBruta,
  jornadas: JornadaProps[]
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
