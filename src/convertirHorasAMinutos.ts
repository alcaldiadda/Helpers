// Función auxiliar para convertir hora en formato "HH:mm" a minutos
export const convertirHoraAMinutos = (hora?: string): number => {
  if (!hora) {
    return 0;
  }
  const [horas, minutos] = hora.split(":").map(Number);
  return horas * 60 + minutos;
};
