"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.documentState = exports.documentTypes = void 0;
exports.documentTypes = [
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
];
exports.documentState = [{ label: "Activo", value: "ACTIVO" },
    { label: "Anulado", value: "ANULADO" }];
