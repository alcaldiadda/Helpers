export const isValidLetters = (text: string) => {
  return /^[A-Za-záéíóúÁÉÍÓÚñÑ\s]*$/.test(text);
};
