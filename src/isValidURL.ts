const urlRegex =
  /(?:https?):\/\/(\w+:?\w*)?(\S+)(:\d+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;

export const isValidURL = (url: string) => {
  return urlRegex.test(url);
};
