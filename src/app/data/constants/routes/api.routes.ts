import { enviroment as ENV } from './../../../../environments/enviroments.dev';

export const queryparams = {
    QUERY:{
        QUERYPUT:'?_method=PUT',
        QUERYPATCH:'?_method=PATCH',
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

}