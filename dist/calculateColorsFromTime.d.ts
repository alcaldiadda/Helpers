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
    disabled?: boolean;
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
export declare const calculateColorsFromTime: ({ dateFromString, properties, }: CalculateColorsProps) => IndicatorProps;
