/**
 * Función que obtiene el día de la semana de una fecha
 * @param {string} fecha - Fecha en formato "YYYY-MM-DD"
 * @returns {string} - Retorna el día de la semana en formato "domingo", "lunes", etc.
 */
export const obtenerDiaSemana = (fecha: string): string => {
  const diasSemana = [
    "domingo",
    "lunes",
    "martes",
    "miercoles",
    "jueves",
    "viernes",
    "sábado",
  ];
  return diasSemana[new Date(fecha + "T00:00:00Z").getUTCDay()];
};
