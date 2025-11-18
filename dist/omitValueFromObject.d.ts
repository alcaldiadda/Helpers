export declare const omitValueFromObject: <T extends object, K extends keyof T>({ source, omitKeys, omitNull, }: {
    source: T;
    omitKeys: K[];
    omitNull?: boolean;
}) => Pick<T, Exclude<keyof T, K>>;
