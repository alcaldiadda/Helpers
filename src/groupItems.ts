/**
 * Groups items based on their parent-child relationship. Each item is expected to have a name, an optional parentId, and a unique $id.
 * Items with a parentId are grouped under their respective parent item's name. If an item does not have a parentId, it is considered
 * a parent item and is used to create a new group with its name. Each group contains an array of its child items, with each child
 * represented by an object containing the child's name as label and its $id as value. If a parent item has no children, it results
 * in a group with an empty items array. The function returns an array of these groups, each with a 'group' property holding the
 * parent item's name and an 'items' array of its children.
 * @param items An array of items where each item is an object with properties name, $id, and an optional parentId.
 * @returns An array of grouped items, with each group containing a parent item's name and its child items, if any.
 */
export const groupItems = (items: any[]) => {
  return items.reduce((acc, item) => {
    if (item.parentId) {
      const parent = items.find((p) => p.$id === item.parentId);
      if (parent) {
        const group = acc.find((g: any) => g.group === parent.name);
        if (group) {
          group.items.push({ label: item.name, value: item.$id });
        } else {
          // create new group if does not exists
          acc.push({
            group: parent.name,
            items: [{ label: item.name, value: item.$id }],
          });
        }
      }
    } else {
      if (!acc.some((g: any) => g.group === item.name)) {
        acc.push({ group: item.name, items: [] });
      }
    }
    return acc;
  }, []);
};
