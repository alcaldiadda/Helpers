export type Direction = "before" | "after";
export declare const isInTime: (utcDate: Date, targetTime: string, direction: Direction, zone: string) => boolean;
