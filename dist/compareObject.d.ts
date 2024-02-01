type Difference = {
    add: Array<Record<string, any>>;
    mod: Array<Record<string, [any, any]>>;
    del: Array<Record<string, any>>;
};
export declare const compareObject: (original: Record<string, any>, modified: Record<string, any>) => Difference;
export {};
