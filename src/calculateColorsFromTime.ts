export interface IndicatorProps {
  color: string;
  processing: boolean;
  days: number;
  label: string;
}

export type ValidationProps = {
  color: string;
  label: string;
  validator: (differenceInDays: number, disabled?: boolean) => boolean;
  processing?: boolean;
};

export type CalculateColorsProps = {
  dateFromString: string;
  properties: ValidationProps[];
  disabled?: boolean;
};

/**
 * Calculates the color indicator based on the provided date and validation properties.
 * @param {string} dateFromString - The date string from which to calculate the difference in days.
 * @param {ValidationProps[]} properties - An array of validation properties containing validators and corresponding colors.
 * @returns {IndicatorProps} - An object representing the color indicator along with processing status and days difference.
 */
export const calculateColorsFromTime = ({
  dateFromString,
  properties,
  disabled,
}: CalculateColorsProps): IndicatorProps => {
  const createdAt = new Date(dateFromString);
  const currentDate = new Date();
  const differenceInDays = Math.floor(
    (currentDate.getTime() - createdAt.getTime()) / (1000 * 60 * 60 * 24)
  );

  for (const { validator, label, color, processing } of properties) {
    if (validator(differenceInDays, disabled)) {
      return { label, color, processing: !!processing, days: differenceInDays };
    }
  }

  return {
    label: "Desconocido",
    color: "gray",
    processing: false,
    days: differenceInDays,
  };
};
