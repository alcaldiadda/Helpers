export interface HolidayResponseProps {
    nombre: string;
    comentarios: string | null;
    fecha: string;
    irrenunciable: "0" | "1";
    tipo: string;
}
export declare const getHolidays: (year: string) => Promise<HolidayResponseProps[]>;
//# sourceMappingURL=getHolidays.d.ts.map