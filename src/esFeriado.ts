/**
 * Función que determina si una fecha es feriado
 * @param {string} fecha - Fecha en formato "YYYY-MM-DD"
 * @param {string[]} [feriados] - Lista de feriados en formato "YYYY-MM-DD"
 * @returns {boolean} - Retorna true si la fecha es feriado, false en caso contrario
 */
const esFeriado = (fecha: string, feriados?: string[]) => {
  const fechaObj = new Date(fecha);

  const diaSemana = fechaObj.getDay();
  const esFinDeSemana = diaSemana === 0 || diaSemana === 6; // 0 = Domingo, 6 = Sábado

  const fechaISO = fechaObj.toISOString().split("T")[0]; // Convierte a formato "aaa-mm-dd"
  const esFeriado = Boolean(feriados?.includes(fechaISO));

  // Verifica si es fin de semana o si está en la lista de feriados
  return esFinDeSemana || esFeriado;
};
