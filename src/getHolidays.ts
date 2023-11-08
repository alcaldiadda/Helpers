export interface HolidayResponseProps {
  nombre: string;
  comentarios: string | null;
  fecha: string;
  irrenunciable: "0" | "1";
  tipo: string;
}

export const getHolidays = async (year: string): Promise<HolidayResponseProps[]> => {
  const response = await fetch(`https://apis.digital.gob.cl/fl/feriados/${year}`);
  return response.json();
};
