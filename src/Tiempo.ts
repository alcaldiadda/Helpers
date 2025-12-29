const ms = {
  segundos: (cantidad: number) => cantidad * 1000,
  minutos: (cantidad: number) => cantidad * 1000 * 60,
  horas: (cantidad: number) => cantidad * 1000 * 60 * 60,
  dias: (cantidad: number) => cantidad * 1000 * 60 * 60 * 24,
};

export const Tiempo = {
  ms,
  segundo: (cantidad: number) => cantidad,
};
