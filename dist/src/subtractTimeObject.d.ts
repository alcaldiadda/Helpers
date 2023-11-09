interface TimeObjectProps {
    hours: number;
    minutes: number;
    start: string;
    end: string;
}
interface TimeToSubtract {
    hours: number;
    minutes: number;
}
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
export {};
