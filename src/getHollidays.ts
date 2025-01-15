export interface HolidayResponseProps {
  nombre: string;
  comentarios: string | null;
  fecha: string;
  irrenunciable: "0" | "1";
  tipo: string;
}

export const getHollidays = async (date: string, forceUpdate = false) => {
  if (typeof window === "undefined") {
    return;
  }

  // check holidays
  const year = new Date(date).getFullYear();
  const folder = "./hollidays/";
  const filename = `${year}.json`;

  let hollidays;

  const fs = await import("fs");

  if (!fs.existsSync(`${folder}${filename}`) || forceUpdate) {
    fs.mkdirSync(folder, { recursive: true });

    const request = await fetch(
      `https://apis.digital.gob.cl/fl/feriados/${year}`
    );
    hollidays = await request.json();
    fs.writeFileSync(`${folder}${filename}`, JSON.stringify(hollidays));
  } else {
    hollidays = fs.readFileSync(`${folder}${filename}`, { encoding: "utf-8" });
    hollidays = JSON.parse(hollidays);
  }

  return hollidays as HolidayResponseProps[];
};
