import { enviroment as ENV } from './../../../../environments/enviroments.dev';

export const queryparams = {
    QUERY:{
        QUERYPUT:'?_method=PUT',
        QUERYPATCH:'?_method=PATCH',
    },
    OPERATORSMAP:{
        EQ:'[eq]',    //=
        LT:'[lt]',    //<
        LTE:'[lte]',  //<=
        GT:'[gt]',    //>   
        GTE:'[gte]',  //>=
        NE:'[ne]',    //!=
        LK:'[lk]',    //like
    }
}



export const API_ROUTES = {
    AUTH: { 
        LOGIN:`${ENV.urlAPI}generalRoutes/LogIn`
    },
    PROPIEDADES:{
        GETALLPROPIEDADES:`${ENV.urlAPI}propiedades`,
        RETRIVEPROPIEDAD:`${ENV.urlAPI}propiedades/`,
        POSTPROPIEDADES:`${ENV.urlAPI}propiedades`,
        UPDATEPROPIEDADID:`${ENV.urlAPI}propiedades/`,
        PATCHPROPIEDADID:`${ENV.urlAPI}propiedades/`,
        // FISIOS:`${ENV.urlAPI}clientesF`,
        // ONEFISIOS:`${ENV.urlAPI}clientesF/`,
        // ONECLIENT:`${ENV.urlAPI}clientesP/`,
        // PUNTUACIONFISIO:`${ENV.urlAPI}clientesF/puntuacion/`
    },
    PROPIETARIOS:{
        GETALLPROPIETARIOS:`${ENV.urlAPI}propietarios`,
        ADDPROPIETARIO:`${ENV.urlAPI}propietarios`,
        UPDATEPROPIETARIO:`${ENV.urlAPI}propietarios/`
    },
    INGRESOS:{
        GETALLPAGOSCONF:`${ENV.urlAPI}configurar-pagos`,
        ADDCONFPAGO:`${ENV.urlAPI}configurar-pagos`,
        UPDATEPAGOCONF:`${ENV.urlAPI}configurar-pagos/`,
    },
    USUARIOS:{
        ADDUSERCONFIRMUSER:`${ENV.urlAPI}usuario/confirmar-registro`,
    },
    INQUILINOS:{
        ELMINQUILINOPROPIEDAD:`${ENV.urlAPI}propiedades/borrarRelacionPropietario/`
    },
    EGRESOS:{
        GETEGRESOS:`${ENV.urlAPI}egresos`,
        GETONEEGRESOS:`${ENV.urlAPI}egresos/`,
        UPDATEEGRESO:`${ENV.urlAPI}egresos/`,
        GETTIPOEGRESO:`${ENV.urlAPI}tipoEgresos`,
        UPDATEDETALLEEGRS :`${ENV.urlAPI}detalleEgresos/`,
        ADDDETALLEEGRESOPOST :`${ENV.urlAPI}detalleEgresos`,
        ADDEGRESOPOST:`${ENV.urlAPI}egresos/`,
        DELDETALLEEGRESO:`${ENV.urlAPI}detalleEgresos/`
    },
    PRODUCTO:{
        UPDATEPRODUCTO:`${ENV.urlAPI}productos/`,
        ADDPRODUCTO:`${ENV.urlAPI}productos`,
    }

}