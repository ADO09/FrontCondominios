
import { ListPropiedadesComponent } from "./list/list-propiedades/list-propiedades.component"
import { ListUsuariosComponent } from "./list/list-usuarios/list-usuarios.component";
import { ModalListPropiedadesComponent } from "./modals/modal-list-propiedades/modal-list-propiedades.component";
import { ListCuotasConfIngrsPagosComponent } from "./list/list-cuotas-conf-ingrs-pagos/list-cuotas-conf-ingrs-pagos.component";
import { ListRecibosGeneralesComponent } from './list/list-recibos-generales/list-recibos-generales.component';
import { ModalRegistroPropiedadComponent } from './modals/modal-registro-propiedad/modal-registro-propiedad.component';

export const components: any[] = [

    ListPropiedadesComponent,
    ListUsuariosComponent,
    ModalListPropiedadesComponent,
    ListCuotasConfIngrsPagosComponent,
    ListRecibosGeneralesComponent,
    ModalRegistroPropiedadComponent
]


export * from './list/list-propiedades/list-propiedades.component';
export * from './list/list-usuarios/list-usuarios.component';
export * from './list/list-cuotas-conf-ingrs-pagos/list-cuotas-conf-ingrs-pagos.component';
export * from './list/list-recibos-generales/list-recibos-generales.component';
export * from './modals/modal-list-propiedades/modal-list-propiedades.component';
export * from './modals/modal-registro-propiedad/modal-registro-propiedad.component';
//export  * from '../../data/layout/dashboard/dashboard.component'; 