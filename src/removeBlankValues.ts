export const removeBlankValues = (
  obj: Record<string, any>
): Record<string, any> => {
  return Object.keys(obj).reduce((newObject, key) => {
    if (obj[key] !== "") {
      newObject[key] = obj[key];
    }
    return newObject;
  }, {} as Record<string, any>);
};
