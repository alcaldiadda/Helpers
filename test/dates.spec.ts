import { expect, test } from "bun:test";

import { DateTime } from "luxon";
import { dividirFecha, obtenerDiaSemana } from "../src";

const fecha_inicial = "2022-01-04T03:25:17Z";

test("dividir fecha", () => {
  const [fecha, hora] = dividirFecha(DateTime.fromISO(fecha_inicial));

  expect(fecha).toBe("2022-01-04");
  expect(hora).toBe("03:25");
});

test("día de la semana", () => {
  const dia_semana = obtenerDiaSemana(fecha_inicial);

  expect(dia_semana).toBe("martes");
});
