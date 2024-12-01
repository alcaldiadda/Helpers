/**
 * Función que obtiene el día de la semana de una fecha
 * @param {string} fecha - Fecha en formato "YYYY-MM-DD"
 * @returns {string} - Retorna el día de la semana en formato "domingo", "lunes", etc.
 */
export const obtenerDiaSemana = (fecha: string): string => {
  const _fecha = new Date(fecha);

  _fecha.setHours(0);

  const diasSemana = [
    "domingo",
    "lunes",
    "martes",
    "miercoles",
    "jueves",
    "viernes",
    "sabado",
  ];
  return diasSemana[_fecha.getUTCDay()];
};
