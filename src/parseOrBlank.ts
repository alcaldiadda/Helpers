export const parseOrBlank = ({
  value,
  isDate,
}: {
  value: string | number | undefined | null;
  isDate?: boolean;
}) => {
  if (!value) {
    return "";
  }

  if (isDate) {
    return new Date(value);
  }
  return value;
};
