export interface HolidayResponseProps {
    nombre: string;
    comentarios: string | null;
    fecha: string;
    irrenunciable: "0" | "1";
    tipo: string;
}
declare const getHolidays: typeof window extends undefined ? () => Promise<void> : never;
export declare const getHollidays: (date: string, forceUpdate?: boolean) => Promise<HolidayResponseProps[]>;
export { getHolidays };
