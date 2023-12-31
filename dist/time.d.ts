export declare const DEFAULT_DATETIME_FORMAT = "ccc dd 'de' MMMM '-' HH:mm";
export declare const DEFAULT_DATE_FORMAT = "dd 'de' MMMM 'del' yyyy";
export declare const DEFAULT_TIME_FORMAT = "HH:mm";
export declare const formatDateTimeFromMillis: (millis: number, format?: string) => string;
export declare const formatDateTimeFromISO: (iso: string, format?: string) => string;
export declare const formatDateTimeFromJS: (date: Date, format?: string) => string;
export declare const formatRelativeDate: (millis: number, format?: string) => string;
export declare const formatRelativeDateFromISO: (iso: string) => string;
export declare const isDateValid: (iso: string) => boolean;
