export const extractError = (strError: string) => {
  const re = new RegExp("Error: ([a-zA-Z_]*)\n");
  try {
    return strError.match(re)![1];
  } catch {
    return "undefined";
  }
};
