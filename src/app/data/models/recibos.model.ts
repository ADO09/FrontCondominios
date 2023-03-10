export class Recibos {
    
    id: number;
    monto: number;
    fechaPago: string;
    fechaVencimiento: string;
    estatus: string;
    montoDescuento: number;
    montoPenalizacion: number;
    fraccionamientoId: number;
    propiedad: any;

    constructor(id:number, monto: number, fechaPago: string, fechaVencimiento: string, estatus: string, montoDescuento: number, montoPenalizacion: number, fraccionamientoId: number, propiedad: any ){
        this.id = id;
        this.monto = monto;
        this.fechaPago = fechaPago;
        this.fechaVencimiento = fechaVencimiento;
        this.estatus = estatus;
        this.montoDescuento = montoDescuento;
        this.montoPenalizacion = montoPenalizacion;
        this.fraccionamientoId = fraccionamientoId;
        this.propiedad = propiedad;
    }

}