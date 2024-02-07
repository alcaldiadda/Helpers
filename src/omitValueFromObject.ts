export const omitValueFromObject = <T extends object, K extends keyof T>({
  source,
  omitKeys,
  omitNull = false,
}: {
  source: T;
  omitKeys: K[];
  omitNull?: boolean;
}): Pick<T, Exclude<keyof T, K>> => {
  const result = {} as Pick<T, Exclude<keyof T, K>>;

  Object.entries(source).forEach(([key, value]) => {
    const shouldOmitKey = omitKeys.includes(key as K);
    const shouldOmitNull = omitNull && value === null;

    if (!shouldOmitKey && !shouldOmitNull) {
      result[key as Exclude<keyof T, K>] = value;
    }
  });

  return result;
};
