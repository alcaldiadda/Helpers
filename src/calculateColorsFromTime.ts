export interface IndicatorProps {
  color: string;
  processing: boolean;
  days: number;
}

export type ValidationProps = {
  validator: (differenceInDays: number) => boolean;
  color: string;
  processing?: boolean;
};

export type CalculateColorsProps = {
  dateFromString: string;
  properties: ValidationProps[];
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
}: CalculateColorsProps): IndicatorProps => {
  const createdAt = new Date(dateFromString);
  const currentDate = new Date();
  const differenceInDays = Math.floor(
    (currentDate.getTime() - createdAt.getTime()) / (1000 * 60 * 60 * 24)
  );

  for (const { validator, color, processing } of properties) {
    if (validator(differenceInDays)) {
      return { color, processing: !!processing, days: differenceInDays };
    }
  }

  return { color: "gray", processing: false, days: differenceInDays };
};
