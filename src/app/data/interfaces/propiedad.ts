export interface propiedad {
    id:number,
    tipoPropiedad: any,
    claveCatastral: string,
    descripcion: string,
    superficie: string,
    balance: number,
    estatus: any,
    // razonDeRechazo: string,
    propietario: any,
    inquilino: number, 
    fraccionamientoId: number,
    predialUrl:string
}