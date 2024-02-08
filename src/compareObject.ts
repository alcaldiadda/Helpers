type Difference = {
  add: Array<Record<string, any>>;
  mod: Array<Record<string, [any, any]>>;
  del: Array<Record<string, any>>;
};

export const compareObject = (
  original: Record<string, any>,
  modified: Record<string, any>
): Difference => {
  let add: Array<Record<string, any>> = [];
  let mod: Array<Record<string, [any, any]>> = [];
  let del: Array<Record<string, any>> = [];

  // finds deleted and updated keys
  for (const key in original) {
    if (!(key in modified)) {
      del.push({ [key]: original[key] });
    } else if (String(original[key]) !== String(modified[key])) {
      mod.push({ [key]: [original[key], modified[key]] });
    }
  }

  // finds new keys
  for (const key in modified) {
    if (!(key in original)) {
      add.push({ [key]: modified[key] });
    }
  }

  return { add, mod, del };
};
