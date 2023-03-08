export interface Vehiculo {
    [key: string]: string | number | null | undefined;
    id?:number | null | undefined,
    color?:string | null | undefined,
    estatus?:number | null | undefined,
    id_esatado?:string | null | undefined,
    id_fraccionamiento?:number| null | undefined,
    id_propiedad?:number | null | undefined,
    id_tipo_vehiculo?:string | null | undefined,
    marca?:string | null | undefined,
    patch_tarjeta_circulacion?:string | null | undefined,
    placas?:string | null | undefined
}