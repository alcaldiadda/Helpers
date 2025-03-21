import { DateTime } from "luxon";
import { Models } from "./models";
import { TipoMarcacion } from "./TipoMarcacion";
/**
 * DATABASE TYPES
 */
export type HomeCard = {
    title: string;
    body: string;
    image: string;
    category: string;
};
export type HomeCardProps = Models.Document & HomeCard;
export type Profile = {
    name: string;
    pid: string;
    avatar?: string;
    title?: string;
    mobile?: string;
    departmentId?: string;
    department?: Department;
};
export type ProfileProps = Models.Document & Profile;
export type Department = {
    name: string;
    short_name: string;
    parentId?: string;
};
export type DepartmentProps = Models.Document & Department;
export type Neighborhood = {
    name: string;
};
export type NeighborhoodProps = Models.Document & Neighborhood;
export type Christmas = {
    user: UserProps;
    pid: string;
};
export type ChristmasProps = Models.Document & Christmas;
export type User = {
    name: string;
    firstname: string;
    lastname: string;
    gender: string;
    pid: string;
    birthday: string;
    region: string;
    city: string;
    neighborhood?: NeighborhoodProps;
    address: string;
    mobile?: string;
    email?: string;
    phone?: string;
    registeredBy?: string;
};
export type UserProps = Models.Document & User;
export type UserTypeForm = Omit<User, "birthday" | "neighborhood"> & {
    birthday: Date;
    neighborhood?: string;
};
export type Menu = {
    key: string;
};
export type MenuProps = Models.Document & Menu;
export type Lunch = {
    profile: ProfileProps;
    start: string;
    end?: string;
    hours: number;
    minutes: number;
    isInRange: boolean;
    hoursExtended: number;
    minutesExtended: number;
};
export type LunchProps = Models.Document & Lunch;
export declare enum OvertimeTypes {
    TYPE_25 = "TYPE_25",
    TYPE_50 = "TYPE_50"
}
export type Overtime = {
    profile: ProfileProps;
    start: string;
    end?: string;
    hours: number;
    minutes: number;
    type: OvertimeTypes;
};
export type OvertimeProps = Models.Document & Overtime;
export type Markin = {
    profile: ProfileProps;
    profileId: string;
    workday: string;
    date: string;
    isComputed: boolean;
};
export type MarkinProps = Models.Document & Markin;
export type Workday = {
    profile: ProfileProps;
    start: string;
    end?: string;
    hours: number;
    minutes: number;
    inTime: boolean;
    isWorkingDay: boolean;
    lunch?: LunchProps;
    overtime: OvertimeProps[];
    markin: MarkinProps[];
};
export type WorkdayProps = Models.Document & Workday;
export type Holliday = {
    name: string;
    date: string;
};
export type HollidayProps = Models.Document & Holliday;
export type ClockMarkinOptionProps = {
    isWorkingDay: boolean;
    isLeaveDay: boolean;
};
export type formatArgumentType = string | Date | number | boolean;
export type WorkCount = {
    profileId: string;
    type: string;
    date: string;
    hours: number;
    minutes: number;
};
export type WorkCountProps = Models.Document & WorkCount;
export type Configuration = {
    key: string;
    option: string;
};
export type ConfigurationProps = Models.Document & Configuration;
/**
 * PROYECT TYPES
 */
export type FilterProps = {
    column: SelectOptionProps;
    operator: SelectOptionProps;
    value: formatArgumentType;
    optional: formatArgumentType;
};
export type FilterFormProps = {
    column: string;
    operator: string;
    value: formatArgumentType;
    optional: formatArgumentType;
};
export type TimeHoursMinutes = {
    hours: number;
    minutes: number;
};
export type SelectOptionProps = {
    label: string;
    value: string;
};
export type addMarkin = {
    $id: string;
    date: string | Date;
    isClock: boolean;
};
export type SchedulesProps = {
    name: string;
    type: string;
    dayStart: number;
    dayEnd: number;
    time: {
        start: string;
        end: string;
    };
};
export type HoursAndExtended = {
    hours: number;
    minutes: number;
    hoursExtended: number;
    minutesExtended: number;
    totalHours: number;
    totalMinutes: number;
};
export type Period = {
    start: string;
    end: string;
};
export type ServerSession = {
    cookie: string;
    session: {
        account: Models.User<Models.Preferences> | null;
        menu: MenuProps[];
    };
};
export type TimeObjectProps = {
    hours: number;
    minutes: number;
    start: string;
    end: string;
};
export type TimeToSubtract = {
    hours: number;
    minutes: number;
};
/** FINANCE */
export declare enum RequestStatus {
    PROCESSING = "PROCESSING",
    NULLED = "NULLED",
    FINISHED = "FINISHED"
}
export type FinanceRequest = {
    requestNumber: string;
    departmentId: string;
    department: DepartmentProps;
    documentType: string;
    classification: string;
    content?: string;
    purchaseType?: string;
    managerId?: string;
    manager: ProfileProps;
    amount: number;
    publishingId: string;
    publishingDate: string;
    awardDate: string;
    awardAcceptanceDate: string;
    supplierId: string;
    supplier: FinanceSupplierProps;
    allProductsReceived: boolean | null;
    tag: string[];
    financeTracking: FinanceTrackingProps;
    status?: RequestStatus;
    program?: FinanceProgramProps;
    programId?: string;
};
export type FinanceRequestProps = FinanceRequest & Models.Document;
export type FinanceTracking = {
    requestId: string;
    submit: string;
    departmentId: string;
    department?: DepartmentProps;
    profile?: ProfileProps;
    note: string;
};
export type FinanceTrackingProps = FinanceTracking & Models.Document;
export type FinanceTimeline = {
    requestId: string;
    profileId: string;
    profile?: ProfileProps;
    eventName: string;
    additional?: string;
};
export type FinanceTimelineProps = FinanceTimeline & Models.Document;
export type FinanceSupplier = {
    pid: string;
    name: string;
    mobile?: string;
    phone?: string;
    email: string;
    accountBank?: string;
    accountType?: string;
    accountNumber?: string;
    emailNotification?: string;
    emailSubject?: string;
    legalRepresentativeName?: string;
    legalRepresentativePid?: string;
};
export type FinanceSupplierProps = FinanceSupplier & Models.Document;
export type FinanceReport = {
    requestId: string;
    date: string;
    state: string;
    separator?: string;
    amount: number;
    type: string;
    id?: string;
    note?: string;
    link?: string;
};
export type FinanceReportProps = FinanceReport & Models.Document;
export type FinanceAttachment = {
    requestId: string;
    type: string[];
    note?: string;
    link: string;
};
export type FinanceAttachmentProps = FinanceAttachment & Models.Document;
export type FinanceWarehouse = {
    requestId: string;
    date: string;
    id: string;
    reportId: string;
    report: FinanceReportProps;
    link: string;
    note?: string;
};
export type FinanceWarehouseProps = FinanceWarehouse & Models.Document;
export type FinanceDeliveryItem = {
    requestNumber: string;
    note?: string;
};
export type FinanceDelivery = {
    departmentIdFrom: string;
    departmentFrom: DepartmentProps;
    departmentIdTo: string;
    request: string;
    createdBy: ProfileProps;
};
export type FinanceDeliveryProps = FinanceDelivery & Models.Document;
export type FinanceWarehousePurchaseOrder = {
    purchaseOrderId: string;
    purchaseOrderNumber: string;
    active: boolean;
    items: FinancePurchaseOrderItemProps[];
};
export type FinanceWarehousePurchaseOrderProps = FinanceWarehousePurchaseOrder & Models.Document;
export type FinancePurchaseOrderItem = {
    buyerDescription: string;
    sellerDescription?: string;
    location?: string;
    purchaseOrder: FinanceWarehousePurchaseOrderProps;
    quantityRequested: number;
    quantityReceived: number;
    quantityDelivered: number;
    unitRequested?: string;
    unitReceived?: string;
};
export type FinancePurchaseOrderItemProps = FinancePurchaseOrderItem & Models.Document;
export type FinanceWarehouseDelivered = {
    requestId: string;
    item: FinancePurchaseOrderItemProps[];
    itemQuantity: string[];
    from: string;
    to: string;
};
export type FinanceWarehouseDeliveredProps = FinanceWarehouseDelivered & Models.Document;
export type FinanceProgram = {
    name: string;
};
export type FinanceProgramProps = FinanceProgram & Models.Document;
/**
 * Recursos Humanos
 */
export type DiaSemana = "lunes" | "martes" | "miercoles" | "jueves" | "viernes" | "sabado" | "domingo";
type MarcacionBase = {
    ip_maquina: string;
    id_usuario_origen?: string;
    id_usuario?: string;
    id_jornada: string;
    fecha: string;
    hora: string;
    tipo: (typeof TipoMarcacion)[keyof typeof TipoMarcacion] | null;
    creado_el: string;
    actualizado_el: string;
    agregado_por: string | null;
};
export type MarcacionBruta = Pick<MarcacionBase, "id_usuario_origen" | "id_usuario" | "fecha" | "ip_maquina">;
export type Marcacion = Pick<MarcacionBase, "id_usuario" | "id_jornada" | "fecha" | "hora" | "tipo">;
export type MarcacionProps = Omit<MarcacionBase, "hora" | "id_usuario_origen"> & Models.Document;
/**
 * Tipo que define la estructura de retorno de la función determinarTipoMarcacion
 * @typedef {Object} SalidaTipoMarcacion
 * @property {TipoMarcacion} tipo - El tipo de marcación determinado
 * @property {string} mensaje - Mensaje descriptivo del resultado
 */
export type SalidaTipoMarcacion = {
    tipo: (typeof TipoMarcacion)[keyof typeof TipoMarcacion];
    mensaje: string;
};
export type JornadaBase = {
    $id: string;
    $createdAt: string;
    $updatedAt: string;
    entrada: string;
    salida: string;
    colacion_inicio?: string;
    colacion_fin?: string;
};
export type JornadaRegular = JornadaBase & {
    tipo: "regular";
    dia_semana: DiaSemana;
    fecha: null;
    id_usuario: null;
};
export type JornadaEspecial = JornadaBase & {
    tipo: "especial";
    dia_semana: null;
    fecha: string;
    id_usuario: null;
};
export type JornadaUsuario = JornadaBase & {
    tipo: "usuario";
    id_usuario: string;
    dia_semana?: DiaSemana;
    fecha?: string;
};
export type Feriado = {
    $id?: string;
    $createdAt?: string;
    $updatedAt?: string;
    fecha: string;
    descripcion?: string;
};
export type Jornada = JornadaRegular | JornadaEspecial | JornadaUsuario;
export type JornadaProps = Models.Document & Jornada;
export type JornadaTrabajo = {
    jornadas: Jornada[];
    feriados: Feriado[];
};
export type RegistraMarcacion = {
    dispositivo_id?: string;
    $id?: string;
    pid?: string;
    fecha_string: string;
    ip_maquina: string;
};
export type ActualizaMarcacion = {
    pid?: string;
    $id?: string;
    session: string;
    marcador: {
        $id: string;
        tipo: (typeof TipoMarcacion)[keyof typeof TipoMarcacion];
    };
};
export type ResultadoTiempo = {
    horas: number;
    minutos: number;
};
export type TipoAusencia = "LICENCIA_MEDICA" | "FERIADO_LEGAL" | "PERMISO_ADMINISTRATIVO" | "PERMISO_ADMINISTRATIVO_SIN_GOCE";
export type Ausencia = {
    id_usuario: string;
    numero_decreto: number | null;
    tipo: string;
    id_reemplazante: number | null;
    fecha_inicio: string;
    fecha_termino: string;
    agregado_por: string;
    actualizado_por: string;
};
export type AusenciaProps = Models.Document & Ausencia;
export type DiaLaboral = {
    id_usuario: string;
    fecha: string;
    id_jornada: string | null;
    jornada: JornadaProps | null;
    hora_entrada: DateTime | null | undefined;
    hora_salida: DateTime | null | undefined;
    inicio_colacion: DateTime | null | undefined;
    fin_colacion: DateTime | null | undefined;
    colacion_en_rango: boolean | null | undefined;
    horas_trabajadas: string;
    tiempo_colacion: string;
    atraso: string;
    salida_anticipada: string;
    exceso_colacion: string;
    colacion_no_devuelta: string;
    horas_extras_25: string;
    horas_extras_50: string;
};
export type DiaLaboralProps = DiaLaboral & Models.Document;
export type MesLaboral = {
    id_usuario: string;
    fecha: string;
    horas_trabajadas: string;
    atraso: string;
    salida_anticipada: string;
    horas_extras_25: string;
    horas_extras_50: string;
    colacion_no_devuelta: string;
    no_marco_colacion: number;
    agregado_por: string | null;
    actualizado_por: string | null;
    ausencia: {
        fecha: string;
        tipo: string;
    }[];
};
export type MesLaboralProps = Models.Document & MesLaboral;
export {};
