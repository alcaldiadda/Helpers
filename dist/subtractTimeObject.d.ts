import { TimeObjectProps, TimeToSubtract } from "./types";
export declare const subtractTimeObjects: (time1: TimeObjectProps, time2: TimeToSubtract) => {
    hours: number;
    minutes: number;
    start: string;
    end: string | null;
    remain: {
        hours: number;
        minutes: number;
    };
};
