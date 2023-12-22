import fs from "fs";

export interface HolidayResponseProps {
  nombre: string;
  comentarios: string | null;
  fecha: string;
  irrenunciable: "0" | "1";
  tipo: string;
}

export const getHollidays = async (date: string, forceUpdate = false) => {
  // check holidays
  const year = new Date(date).getFullYear();
  const folder = "./hollidays/";
  const filename = `${year}.json`;

  let hollidays;

  if (!fs.existsSync(`${folder}${filename}`) || forceUpdate) {
    fs.mkdirSync(folder, { recursive: true });

    const request = await fetch(
      `https://apis.digital.gob.cl/fl/feriados/${year}`
    );
    hollidays = request.json();
    fs.writeFileSync(`${folder}${filename}`, JSON.stringify(hollidays));
  } else {
    hollidays = fs.readFileSync(`${folder}${filename}`, { encoding: "utf-8" });
    hollidays = JSON.parse(hollidays);
  }

  return hollidays as HolidayResponseProps[];
};
