import { SchedulesProps } from "./types";
interface OvertimeResult {
    hours: number;
    minutes: number;
    start: string;
    end: string;
}
interface OvertimeCalculation {
    start: string;
    end: string;
    timezone: string;
    isWorkingDay: boolean;
}
export declare const calculateOvertime: ({ start, end, isWorkingDay, timezone }: OvertimeCalculation, overtimeSessions: SchedulesProps[]) => Record<string, OvertimeResult>;
export {};
