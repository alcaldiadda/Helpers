import { Identification } from "./Identification";

export const isValidPid = (value: string[] | string): string | null => {
  const values = Array.isArray(value) ? value : [value];

  for (let i = 0; i < values.length; i++) {
    const [pid, pidValue] = values[i].split(":");

    if (pid !== "pid") {
      continue;
    }

    if (pidValue.length === 0) {
      return "Debes ingresar un RUT";
    }

    if (pidValue === undefined || pidValue.length === 0) {
      return "Debes ingresar un valor para el PID";
    }

    const rut = new Identification(pidValue);

    if (!rut.isValid()) {
      return "El PID ingresado no es válido";
    }
  }

  return null;
};
