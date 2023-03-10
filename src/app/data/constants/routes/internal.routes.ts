export const ROUTES_PATHS = {
    //AUTENTIFICACION
    AUTH:{
        DEFAULT:'auth',
        LOGIN:'login'
    },
    //PANELES
    PANEL:{
        DEFAULT:'panel',



        //-------------REGISTTROS----------------------
        REGDEFAULT:'registro',
       // REGADMFRC
        REGADMFRC:'regAdminFracc',
        //Acepto de contraseña admin de fraccionamiento
        ACPTCONTRSREGADMINFRACC:'acptContrsAdmnFracc',



        //-------------USUARIOS------------------------
        USUARIOSDEFAULT: 'usuarios',
        CRUD_USUARIOS: 'crudUsuarios',
        
        //INQUILINO------------------------------------
        INICIO_INQUILINO: 'Inquilino',


        //------------PROPIEDADES-----------------------

        PROPDEFAULT:'propiedades',
        PROPPRINCP:'propPrincl',
        REGPROPIEDAD:'regPropiedad',

        //----------------------------------------------


        //-----------INGRESOS---------------------------
        INGRESOSDEFAULT:'ingresos',
        CUOTASCONFINGRS:'cuotasConfPagos',
        INGRESOSRECIBOS:'recibosGenerales',
        REGCONFPAGOS:'regConfPagos',
        //----------------------------------------------

        //VEHICULOS
        VEHICULOSDEFAULT:'vehiculos',
        VEHICULOSLISTADOS:'listado',
        VEHICULOSREGISTRO:'registro',
        VEHICULOSEDITAR:'editar/:id',

        //-----------------------------------------------


        //-----------PROPIETARIOS------------------------
        PROPIETARIOSDEFAULT:'propietarios',
        REGPROPIETARIO:'regPropietarios',
        GESTIONPROPIETARIOS:'gestionPropietarios',
        //-----------------------------------------------
        PRINCIPALF:'pagPrincipalf',
        USERCLIENTESLIST:'',
        BALANCE:'',
        PERFILF:'perfilUserf',
        PERFILP:'perfilUserC',
        REGISTROP:'regClient',
        REGISTROF:'regFisio',
        TIPOREGS:'tipoReg',
        HISTORIALCITS:'historialCitas',
        CONFPAGINA:'confPagina',
        REGCITA:'regSolcCita',
        FAVS:'favoritos',
        PLANES:'planes',
        EXPMEDC:'expMedicoCliente',
        CONFPACIENTE:'ConfigCliente',
        CONFFISIO:'Configfisio',
        GESTFISIO:'gestionFisios',
        GESTCLIENT:'gestionPacientes',
        BALANCEG:'BalanceGList',
        CHAT:'chat'
    }
}

export const INTERNAL_PATHS = {

 // AUTHENTIFICATION
    AUTH_DEFAULT : `${ROUTES_PATHS.AUTH.DEFAULT}`,
    AUTH_LOGIN : `${ROUTES_PATHS.AUTH.LOGIN}`,

    //PANEL

    //REGISTROS--------------------------
    PANELDEFAULT:`${ROUTES_PATHS.PANEL.DEFAULT}`,

    PANELREGDEFAULT:`${ROUTES_PATHS.PANEL.REGDEFAULT}`,
    PANELREGADMFRC:`${ROUTES_PATHS.PANEL.REGADMFRC}`,
    PANELACPTCONTRSREGADMINFRACC:`${ROUTES_PATHS.PANEL.ACPTCONTRSREGADMINFRACC}`,

    //USUARIOS-----------------------------------------
    PANELUSUARIOSDEFAULT: `${ROUTES_PATHS.PANEL.USUARIOSDEFAULT}`,
    PANELCRUD_USUARIOS: `${ROUTES_PATHS.PANEL.CRUD_USUARIOS}`,

    //INQUILINO-------------------------------------------------
    PANEL_INQUILINO: `${ROUTES_PATHS.PANEL.INICIO_INQUILINO}`,


     //PROPIEDADES-----------------------------------------
     PANELPROPDEFAULT: `${ROUTES_PATHS.PANEL.PROPDEFAULT}`,
     PANLEPROPPRINCL: `${ROUTES_PATHS.PANEL.PROPPRINCP}`,
     PANLEREGPROPIEDAD: `${ROUTES_PATHS.PANEL.REGPROPIEDAD}`,
 
     //-------------------------------------------------



    //INGRESOS---------------------------------------------
    PANELDEFAULTINGRESOS:`${ROUTES_PATHS.PANEL.INGRESOSDEFAULT}`,
    PANELCUOTAS: `${ROUTES_PATHS.PANEL.CUOTASCONFINGRS}`,
    PANELRECIBOSGRLS: `${ROUTES_PATHS.PANEL.INGRESOSRECIBOS}`,
    PANELREGCONFPAGOS: `${ROUTES_PATHS.PANEL.REGCONFPAGOS}`,
    //----------------------------------------------------

    //VEHICULOS
    PANELDEFAULTVEHICULO:`${ROUTES_PATHS.PANEL.VEHICULOSDEFAULT}`,
    PANELLISTADOVEHICULO: `${ROUTES_PATHS.PANEL.VEHICULOSLISTADOS}`,
    PANELREGISTRVEHICULO:`${ROUTES_PATHS.PANEL.VEHICULOSREGISTRO}`,
    PANELEDITARVEHICULO:`${ROUTES_PATHS.PANEL.VEHICULOSEDITAR}`,


    //PROPIETARIOS-----------------------------------------------
    PANELDEFAULTPROPIETARIOS:`${ROUTES_PATHS.PANEL.PROPIETARIOSDEFAULT}`,
    PANELREGPROPIETARIOS:`${ROUTES_PATHS.PANEL.REGPROPIETARIO}`,
    PANELGESTIONPROPIETARIOS:`${ROUTES_PATHS.PANEL.GESTIONPROPIETARIOS}`,

    //-----------------------------------------------------------

    
    // PANELPAGPRINCF: `${ROUTES_PATHS.PANEL.PRINCIPALF}`,
    // PANELPERFILF: `${ROUTES_PATHS.PANEL.PERFILF}`,
    // PANELPERFILP: `${ROUTES_PATHS.PANEL.PERFILP}`,
    // PANELREGFISIO:`${ROUTES_PATHS.PANEL.REGISTROF}`,
    // PANELREGCLIENT:`${ROUTES_PATHS.PANEL.REGISTROP}`,
    // PANELTIPOREGS:`${ROUTES_PATHS.PANEL.TIPOREGS}`,
    // PANELHISTCITS:`${ROUTES_PATHS.PANEL.HISTORIALCITS}`,
    // PANELCONFPAGINA:`${ROUTES_PATHS.PANEL.CONFPAGINA}`,
    // PANELREGCITA:`${ROUTES_PATHS.PANEL.REGCITA}`,
    // PANELFISIOSFAVS:`${ROUTES_PATHS.PANEL.FAVS}`,
    // PANELPLANES:`${ROUTES_PATHS.PANEL.PLANES}`,
    // PANELEXPEDIENTEMEDC:`${ROUTES_PATHS.PANEL.EXPMEDC}`,
    // PANELCONFPACIENTE:`${ROUTES_PATHS.PANEL.CONFPACIENTE}`,
    // PANELCONFFISIO:`${ROUTES_PATHS.PANEL.CONFFISIO}`,
    // PANELGESTFISIOS:`${ROUTES_PATHS.PANEL.GESTFISIO}`,
    // PANELGESTIONCLIENTS:`${ROUTES_PATHS.PANEL.GESTCLIENT}`,
    // PANELBALANCEGLIST:`${ROUTES_PATHS.PANEL.BALANCEG}`,
    // PANELCHAT:`${ROUTES_PATHS.PANEL.CHAT}`,
}

export const INTERNAL_ROUTES = {

    // AUTHENTIFICATION

    AUTH_LOGIN:`/${INTERNAL_PATHS.AUTH_DEFAULT}/${INTERNAL_PATHS.AUTH_LOGIN}`,

    // // PANEL

    // MODULO_PAGPRINCP:`/${INTERNAL_PATHS.PANELDEFAULT}/${INTERNAL_PATHS.PANELUSERAUTH}/${INTERNAL_PATHS.PANELPAGPRINCP}`,

    // MODULO_PAGPRINCF:`/${INTERNAL_PATHS.PANELDEFAULT}/${INTERNAL_PATHS.PANELUSERAUTH}/${INTERNAL_PATHS.PANELPAGPRINCF}`,

    // //CONFIGURACION PAGINA
    // MODULO_CONFPAGINA:`/${INTERNAL_PATHS.PANELDEFAULT}/${INTERNAL_PATHS.PANELUSERAUTH}/${INTERNAL_PATHS.PANELCONFPAGINA}`,

    // //CITAS HISTORIAL
    // MODULO_CITASHISTORIAL:`/${INTERNAL_PATHS.PANELDEFAULT}/${INTERNAL_PATHS.PANELUSERAUTH}/${INTERNAL_PATHS.PANELHISTCITS}`,

    // //CITAS REGISTRO
    // MODULO_CITASREGISTRO:`/${INTERNAL_PATHS.PANELDEFAULT}/${INTERNAL_PATHS.PANELUSERAUTH}/${INTERNAL_PATHS.PANELREGCITA}/`,

   
    // //PERFILES
    // MODULO_PERFILFISIOS:`/${INTERNAL_PATHS.PANELDEFAULT}/${INTERNAL_PATHS.PANELUSERAUTH}/${INTERNAL_PATHS.PANELPERFILF}/`,
    // MODULO_PERFILCLIENTES:`/${INTERNAL_PATHS.PANELDEFAULT}/${INTERNAL_PATHS.PANELUSERAUTH}/${INTERNAL_PATHS.PANELPERFILP}/`,

    // //CONFIGURACION DATOS
    // MODULO_CONFPACIENTE:`/${INTERNAL_PATHS.PANELDEFAULT}/${INTERNAL_PATHS.PANELUSERAUTH}/${INTERNAL_PATHS.PANELCONFPACIENTE}/`,
    // MODULO_CONFFISIO:`/${INTERNAL_PATHS.PANELDEFAULT}/${INTERNAL_PATHS.PANELUSERAUTH}/${INTERNAL_PATHS.PANELCONFFISIO}/`,

    // //EXPEDIENTE MEDICO
    // MODULO_EXPMEDICO:`/${INTERNAL_PATHS.PANELDEFAULT}/${INTERNAL_PATHS.PANELUSERAUTH}/${INTERNAL_PATHS.PANELEXPEDIENTEMEDC}/`,
    // //MODULO_EXPMEDICO:`/${INTERNAL_PATHS.PANELDEFAULT}/${INTERNAL_PATHS.PANELUSERAUTH}/${INTERNAL_PATHS.PANELEXPEDIENTEMEDC}/`,




    //REGISTROS--------------------------------------
    MODULO_REGADMINFRACC:`${INTERNAL_PATHS.PANELREGDEFAULT}/${INTERNAL_PATHS.PANELREGADMFRC}`,
    MODULO_ACPTCONTRSREGADMINFRACC:`${INTERNAL_PATHS.PANELREGDEFAULT}/${INTERNAL_PATHS.PANELACPTCONTRSREGADMINFRACC}`,
    

    //USUARIOS-------------------------------------
    MODULO_USUARIOS: `${INTERNAL_PATHS.PANELUSUARIOSDEFAULT}/${INTERNAL_PATHS.PANELCRUD_USUARIOS}`,

    
    //INQUILINO-------------------------------------
    MODULO_INICIO_INQUILINO: `${INTERNAL_PATHS.PANEL_INQUILINO}`,

    // MODULO_REGCLIENT:`/${INTERNAL_PATHS.PANELREGDEFAULT}/${INTERNAL_PATHS.PANELREGCLIENT}`,
    // MODULO_TIPOREG:`/${INTERNAL_PATHS.PANELREGDEFAULT}/${INTERNAL_PATHS.PANELTIPOREGS}`,



    //PROPIEDADES------------------------------------
    MODULO_PROPPRINC: `${INTERNAL_PATHS.PANELPROPDEFAULT}/${INTERNAL_PATHS.PANLEPROPPRINCL}`,
    MODULO_REGPROPIEDAD: `${INTERNAL_PATHS.PANELPROPDEFAULT}/${INTERNAL_PATHS.PANLEREGPROPIEDAD}`,



    //INGRESOS

     MODULO_CUOTAS:`${INTERNAL_PATHS.PANELDEFAULTINGRESOS}/${INTERNAL_PATHS.PANELCUOTAS}`,
     MODULO_RECIBOS:`${INTERNAL_PATHS.PANELDEFAULTINGRESOS}/${INTERNAL_PATHS.PANELRECIBOSGRLS}`,
     MODULO_REGCONFPAGO:`${INTERNAL_PATHS.PANELDEFAULTINGRESOS}/${INTERNAL_PATHS.PANELREGCONFPAGOS}`,

    //VEHICULOS
    MODULO_LISTADO_VEHICULOS:`${INTERNAL_PATHS.PANELDEFAULTVEHICULO}/${INTERNAL_PATHS.PANELLISTADOVEHICULO}`,
    MODULO_REGISTRO_VEHICULOS:`${INTERNAL_PATHS.PANELDEFAULTVEHICULO}/${INTERNAL_PATHS.PANELREGISTRVEHICULO}`,
    MODULO_EDITAR_VEHICULOS:`${INTERNAL_PATHS.PANELDEFAULTVEHICULO}/${INTERNAL_PATHS.PANELEDITARVEHICULO}`,



    //PROPIETARIOS
    MODULO_REG_PROPIETARIO:`${INTERNAL_PATHS.PANELDEFAULTPROPIETARIOS}/${INTERNAL_PATHS.PANELREGPROPIETARIOS}`,
    MODULO_GESTION_PROPIETARIOS:`${INTERNAL_PATHS.PANELDEFAULTPROPIETARIOS}/${INTERNAL_PATHS.PANELGESTIONPROPIETARIOS}`,


    // //FAVORITOS FISIOS
    // MODULO_FAVORITOSFISIOS:`/${INTERNAL_PATHS.PANELDEFAULT}/${INTERNAL_PATHS.PANELUSERAUTH}/${INTERNAL_PATHS.PANELFISIOSFAVS}`,

    // //PLANES
    // MODULO_PLANESFISIOLIST:`/${INTERNAL_PATHS.PANELDEFAULT}/${INTERNAL_PATHS.PANELUSERAUTH}/${INTERNAL_PATHS.PANELPLANES}/`,


    // //GESTIONES ADMIN
    // MODULO_GESTFISIO:`/${INTERNAL_PATHS.PANELDEFAULT}/${INTERNAL_PATHS.PANELUSERAUTH}/${INTERNAL_PATHS.PANELGESTFISIOS}/`,
    // MODULO_GESTCLIENT:`/${INTERNAL_PATHS.PANELDEFAULT}/${INTERNAL_PATHS.PANELUSERAUTH}/${INTERNAL_PATHS.PANELGESTIONCLIENTS}/`,
    

    // //BALANCE GENERAL LISTA
    // MODULO_BALANCEGENERAL:`/${INTERNAL_PATHS.PANELDEFAULT}/${INTERNAL_PATHS.PANELUSERAUTH}/${INTERNAL_PATHS.PANELBALANCEGLIST}/`,

    // //CHAT
    // MODULO_CHAT:`/${INTERNAL_PATHS.PANELDEFAULT}/${INTERNAL_PATHS.PANELUSERAUTH}/${INTERNAL_PATHS.PANELCHAT}`,

}