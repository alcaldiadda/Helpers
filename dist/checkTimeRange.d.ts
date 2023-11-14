interface DateData {
    start: string;
    end: string;
}
interface SessionData {
    start: string;
    end: string;
}
export declare const checkTimeRange: (data: DateData, session: SessionData, timezone: string) => boolean;
export {};
