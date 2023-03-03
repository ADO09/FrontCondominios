import { enviroment as ENV } from './../../../../environments/enviroments.dev';

export const API_ROUTES = {
    AUTH: { 
        LOGIN:`${ENV.urlAPI}generalRoutes/LogIn`
    },
    PROPIEDADES:{
        GETALLPROPIEDADES:`${ENV.urlAPI}propiedades`,
        // FISIOS:`${ENV.urlAPI}clientesF`,
        // ONEFISIOS:`${ENV.urlAPI}clientesF/`,
        // ONECLIENT:`${ENV.urlAPI}clientesP/`,
        // PUNTUACIONFISIO:`${ENV.urlAPI}clientesF/puntuacion/`
    },

}