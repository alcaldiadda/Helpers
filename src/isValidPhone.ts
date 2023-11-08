export const isValidPhone = (text: string) => {
  return !/_/.test(text);
};
