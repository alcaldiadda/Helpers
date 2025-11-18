import { DateTime } from "luxon";

/**
 * Divide una fecha en formato DateTime en fecha y hora
 * @param fecha - La fecha a dividir
 * @returns Un array con la fecha y la hora en formato YYYY-MM-DD y HH:mm
 */
export const dividirFecha = (fecha: DateTime) => {
  // Construir la fecha en formato YYYY-MM-DD
  const mes = String(fecha.month).padStart(2, "0");
  const dia = String(fecha.day).padStart(2, "0");
  const fechaFormateada = `${fecha.year}-${mes}-${dia}`;

  // Construir la hora en formato HH:mm
  const hora = String(fecha.hour).padStart(2, "0");
  const minuto = String(fecha.minute).padStart(2, "0");
  const horaFormateada = `${hora}:${minuto}`;
  return [fechaFormateada, horaFormateada];
};
