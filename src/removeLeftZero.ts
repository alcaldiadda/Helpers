export const removeLeftZero = (valor: string): string => {
  return valor.replace(/^0+/, "");
};
