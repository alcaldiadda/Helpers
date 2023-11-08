/* 
  capitalize the given text
*/
export const capitalize = (text: string): string => {
  return text
    .toLocaleLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};
