/**
 * Given a full text string returns always the first word
 * @param fulltext text with multiples words
 * @returns string with the first word or an empty string
 */
export const getFirstWord = (fulltext: string) => {
  const [first] = fulltext.split(" ");
  if (first) {
    return first;
  }

  return "";
};