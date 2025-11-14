export const documentTypes = [
  { value: "ORDEN_COMPRA", label: "Orden de Compra" },
  { value: "GUIA_DESPACHO", label: "Guía de Despacho" },
  { value: "FACTURA", label: "Factura" },
  { value: "BOLETA_HONORARIO", label: "Boleta de Honorario" },
  { value: "CHEQUE", label: "Cheque" },
  { value: "TRANSFERENCIA", label: "Transferencia" },
  { value: "DECRETO_PAGO", label: "Decreto de Pago" },
  { value: "DECRETO_ALCALDICIO", label: "Decreto Alcaldicio" },
  { value: "RETIRO", label: "Retiro de Dinero" },
  { value: "COMPROBANTE", label: "Comprobante" },
  { value: "NOTA_CREDITO", label: "Nota de Crédito" },
  { value: "NOTA_DEBITO", label: "Nota de Debito" },
];

export const documentState = [
  { label: "Activo", value: "ACTIVO" },
  { label: "Anulado", value: "ANULADO" },
];

export const documentAttachmentTypes = [
  { value: "SOLICITUD", label: "Solicitud" },
  { value: "MEMORANDUM", label: "Memorándum" },
  { value: "ORDINARIO", label: "Ordinario" },
  { value: "CURRICULUM", label: "Currículum" },
  { value: "FICHA_TECNICA", label: "Ficha Técnica" },
  { value: "CONTRATO", label: "Contrato" },
  { value: "DECRETO_ALCALDICIO", label: "Decreto Alcaldicio" },
  { value: "COTIZACIÓN", label: "Cotización" },
  { value: "CARTA", label: "Carta" },
  { value: "BOLETA", label: "Boleta" },
  { value: "EMAIL", label: "Correo Electrónico" },
  {
    value: "CERT_DISP_PRESUPUESTARIA",
    label: "Certificado de Disponibilidad Presupuestaria",
  },
  {
    value: "CERT_INGRESO_ADM_PUBLICA",
    label: "Certificado de Ingreso a la Administración Pública",
  },
  {
    value: "DECLARACION_JURADA",
    label: "Declaración Jurada",
  },
  {
    value: "FOTOCOPIA_CEDULA",
    label: "Fotocopia de Cédula de Identidad",
  },
  {
    value: "TITULO_ESTUDIOS",
    label: "Título de Estudios",
  },
  {
    value: "CERTIFICADO_ESTUDIOS",
    label: "Certificado de Estudios",
  },
  {
    value: "SOLICITUD_ANULACION",
    label: "Solicitud de Anulación",
  },
];

export const purchaseType = [
  { value: "COMPRA_AGIL", label: "Compra Ágil" },
  { value: "LICITACION", label: "Licitación" },
  { value: "TRATO_DIRECTO", label: "Trato Directo" },
  { value: "CONVENIO_MARCO", label: "Convenio Marco" },
  { value: "MICROCOMPRA", label: "Microcompra" },
  { value: "COMPRA_COORDINADA", label: "Compra Coordinada" },
  {
    value: "TRATO_DIRECTO_EMERGENCIA",
    label: "Trato directo por emergencia, urgencia e imprevisto",
  },
  {
    value: "TRATO_DIRECTO_PROVEEDOR_UNICO",
    label: "Trato directo por emergencia, urgencia e imprevisto",
  },
];

export const documentRequestType = [
  { label: "Gestión Interna", value: "GESTION_INTERNA" },
  { label: "Fondo de Terceros", value: "FONDO_TERCERO" },
  { label: "Proyectos e Inversiones", value: "PROYECTO_INVERSIONES" },
  { label: "Mideplan", value: "MIDEPLAN" },
];
