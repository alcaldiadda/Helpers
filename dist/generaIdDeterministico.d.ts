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
export declare const generarIdDeterministico: (props: {
    prefijo: string;
    id_identidad?: string;
    fecha?: string;
    longitud?: number;
}) => Promise<string>;
