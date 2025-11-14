export declare class Identification {
    private id;
    constructor(rut: string);
    isValid(incluyeZero?: boolean): boolean;
    format(options?: {
        dots: boolean;
    }): string;
    getCheckDigit(): string;
    clean(): string;
}
