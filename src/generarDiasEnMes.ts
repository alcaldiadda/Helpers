import { DateTime } from "luxon";

/**
 * Genera un array con objetos DateTime de Luxon para cada día del mes especificado,
 * excluyendo sábados y domingos si el parámetro incluirFinSemana es false.
 *
 * @param anio - El año (ejemplo: 2024)
 * @param mes - El mes (1-12, donde 1 es enero)
 * @param incluirFinSemana - Booleano que indica si se deben incluir sábados y domingos (opcional, por defecto false)
 * @returns Array de objetos DateTime, uno para cada día del mes especificado
 * @example
 * const diasEnero = generarDiasEnMes(2024, 1, true); // Incluye fines de semana
 * const diasLaboralesEnero = generarDiasEnMes(2024, 1); // Excluye sábados y domingos
 */
export const generarDiasEnMes = (
  anio: number,
  mes: number,
  incluirFinSemana = false
): DateTime[] => {
  const primerDiaDelMes = DateTime.fromObject({
    year: anio,
    month: mes,
    day: 1,
  });
  const ultimoDia = primerDiaDelMes.endOf("month").day;
  const dias: DateTime[] = [];

  for (let dia = 1; dia <= ultimoDia; dia++) {
    const fecha = DateTime.fromObject({ year: anio, month: mes, day: dia });
    if (!incluirFinSemana && (fecha.weekday === 6 || fecha.weekday === 7))
      continue;
    dias.push(fecha);
  }

  return dias;
};
