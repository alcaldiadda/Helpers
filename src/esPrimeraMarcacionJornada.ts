/**
 * Función que determina si la primera marcación de la jornada es la fecha actual
 * @param {string} fechaActual - Fecha actual en formato "YYYY-MM-DD"
 * @param {string[]} historial - Historial de marcaciones en formato "YYYY-MM-DD"
 * @param {string} [iniciaJornada="07:00"] - Hora de inicio de la jornada en formato "HH:MM"
 * @returns {boolean} - Retorna true si la primera marcación es la fecha actual, false en caso contrario
 */
export const esPrimeraMarcacionJornada = (
  fechaActual: string,
  historial: string[],
  iniciaJornada: string = "07:00"
): boolean => {
  const inicioJornada = new Date(fechaActual);
  const [horas, minutos] = iniciaJornada.split(":").map(Number);
  inicioJornada.setHours(horas, minutos, 0, 0);

  const fechaActualDate = new Date(fechaActual);
  // Validación: Si la fecha actual es antes de las 07:00 AM
  if (fechaActualDate < inicioJornada) return false;

  // Filtrar marcaciones después de las 07:00 AM, excluyendo la fecha actual
  const marcacionesJornada = historial
    .map((fecha) => new Date(fecha))
    .filter(
      (fecha) =>
        fecha >= inicioJornada && fecha.getTime() !== fechaActualDate.getTime()
    );

  // Si no hay marcaciones después de las 07:00 AM, entonces la fecha actual es la primera
  return marcacionesJornada.length === 0;
};
