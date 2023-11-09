export declare class Identification {
    private id;
    constructor(rut: string);
    isValid(): boolean;
    format(options?: {
        dots: boolean;
    }): string;
    getCheckDigit(): string;
    clean(): string;
}
