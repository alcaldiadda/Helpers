export declare class Identification {
    private id;
    constructor(rut: string);
    isValid(incluyeCero?: boolean): boolean;
    format(options?: {
        dots: boolean;
    }): string;
    getCheckDigit(): string;
    clean(): string;
}
