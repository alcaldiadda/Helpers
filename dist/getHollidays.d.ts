export interface HolidayResponseProps {
    nombre: string;
    comentarios: string | null;
    fecha: string;
    irrenunciable: "0" | "1";
    tipo: string;
}
export declare const getHollidays: (date: string, forceUpdate?: boolean) => Promise<HolidayResponseProps[] | undefined>;
