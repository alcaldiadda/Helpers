export type Direction = "before" | "after";
export declare const isInTime: (utcDate: string, targetTime: string, direction: Direction, zone: string) => boolean;
