/**
 * Genera un ID determinístico a partir de prefijo + id_identidad + fecha.
 *
 * @param props.prefijo      Prefijo fijo para el ID.
 * @param props.id_identidad Identificador único de la identidad.
 * @param props.fecha        Fecha completa o parcial usada en el hash.
 * @param props.longitud     Largo final del ID (default: 20).
 *
 * @returns ID determinístico en base36 con la longitud indicada.
 */
export const generarIdDeterministico = async (props: {
  prefijo: string;
  id_identidad?: string;
  fecha?: string;
  longitud?: number;
}): Promise<string> => {
  if (!props.id_identidad && !props.fecha) {
    throw new Error("FECHA_Y_ID_VACIOS");
  }

  const text = [props.prefijo];

  if (props.id_identidad) {
    text.push(props.id_identidad);
  }

  if (props.fecha) {
    text.push(props.fecha);
  }

  const input = text.join("-");

  const encoder = new TextEncoder();
  const data = encoder.encode(input);
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);

  // convierte a base36
  const hashHex = Array.from(new Uint8Array(hashBuffer))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");

  const hashBase36 = BigInt("0x" + hashHex).toString(36);

  // retorna exactamente 36 caracteres
  return hashBase36.slice(0, props.longitud ?? 20);
};
