
import { ListPropiedadesComponent } from "./list/list-propiedades/list-propiedades.component"
import { ListUsuariosComponent } from "./list/list-usuarios/list-usuarios.component";
import { ModalListPropiedadesComponent } from "./modals/modal-list-propiedades/modal-list-propiedades.component";
import { ListCuotasConfIngrsPagosComponent } from "./list/list-cuotas-conf-ingrs-pagos/list-cuotas-conf-ingrs-pagos.component";
import { ListRecibosGeneralesComponent } from './list/list-recibos-generales/list-recibos-generales.component';
import { ModalRegistroPropiedadComponent } from './modals/modal-registro-propiedad/modal-registro-propiedad.component';
import { ModalListInquilinosComponent } from './modals/modal-list-inquilinos/modal-list-inquilinos.component';
import { ModalListPropietariosComponent } from './modals/modal-list-propietarios/modal-list-propietarios.component';

import { ListRecibosInquilinoComponent } from "./list/list-recibos-inquilino/list-recibos-inquilino.component";
import { ModalListRecibosComponent } from "./modals/modal-list-recibos/modal-list-recibos.component";
import { ModalGestionConfPagoComponent } from './modals/modal-gestion-conf-pago/modal-gestion-conf-pago.component';
import { ListGestionPropietarioComponent } from './list/list-gestion-propietario/list-gestion-propietario.component';
import { ModalGestionPropietarioComponent } from './modals/modal-gestion-propietario/modal-gestion-propietario.component';

export const components: any[] = [

    ListPropiedadesComponent,
    ListUsuariosComponent,
    ModalListPropiedadesComponent,
    ListCuotasConfIngrsPagosComponent,
    ListRecibosGeneralesComponent,
    ModalRegistroPropiedadComponent,
    ListRecibosInquilinoComponent,
    ModalListRecibosComponent,
    ModalListInquilinosComponent,
    ModalListPropietariosComponent,
    ModalGestionConfPagoComponent,
    ListGestionPropietarioComponent,
    ModalGestionPropietarioComponent
]


export * from './list/list-propiedades/list-propiedades.component';
export * from './list/list-usuarios/list-usuarios.component';
export * from './list/list-cuotas-conf-ingrs-pagos/list-cuotas-conf-ingrs-pagos.component';
export * from './list/list-recibos-generales/list-recibos-generales.component';
export * from './modals/modal-list-propiedades/modal-list-propiedades.component';
export * from './modals/modal-registro-propiedad/modal-registro-propiedad.component';
export * from './modals/modal-gestion-conf-pago/modal-gestion-conf-pago.component';

//export  * from '../../data/layout/dashboard/dashboard.component'; 