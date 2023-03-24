export interface Egreso {
  id?: any;
  fraccionamientoId?: any;
  descripcion?: any;
  comprobanteUrl?: any;
  montoTotal?: any;
  isVerified?: any;
  tipoEgreso?: {
    id?: any;
    descripcion?: any;
    status?: any;
  } | null;
  estatusEgreso?: {
    id?: any;
    descripcion?: any;
  } | null;
  detalleEgreso?: any[] | null | DetalleEgreso[];
}

interface DetalleEgreso {
  cantidad?: any;
  descripcion?: any;
  precio_unitario?: any;
  producto?: any;
}