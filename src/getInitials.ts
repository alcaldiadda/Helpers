/**
 * Gets the first character from a text.
 * 
 * eg. getInitials("Hello World", 2) will return HW
 * 
 * @param text full string text
 * @param characters number of initials to return
 * @returns 
 */
export const getinitials = (text: string, characters = 2): string => {
  const words = text.split(" ");
  const initials = words.reduce((acc, word, index) => {
    if (index < characters) {
      acc += word[0].toUpperCase();
    }
    return acc;
  }, "");

  return initials;
};