import { Period } from "./types";
interface SplitDateRangeInput {
    start: string;
    end: string;
    timezone: string;
}
export declare const splitDateRange: ({ start, end, timezone, }: SplitDateRangeInput) => Period[];
export {};
//# sourceMappingURL=splitDateRange.d.ts.map