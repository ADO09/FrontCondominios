export interface Vehiculo {
    id:number ,
    color:string,
    estatus:number,
    id_esatado:number,
    id_fraccionamiento:number,
    id_propiedad:number,
    id_tipo_vehiculo:number,
    marca:string,
    patch_tarjeta_circulacion?:string,
    placas:string
}