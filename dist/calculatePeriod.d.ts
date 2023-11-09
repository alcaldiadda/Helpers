import { HoursAndExtended } from "./types";
interface CalculatePeriodProps {
    start: string;
    end: string;
    basePeriodMinutes: number;
}
export declare const calculatePeriod: ({ start, end, basePeriodMinutes }: CalculatePeriodProps) => HoursAndExtended;
export {};
