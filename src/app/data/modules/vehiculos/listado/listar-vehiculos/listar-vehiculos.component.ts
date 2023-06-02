import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Vehiculo } from 'src/app/data/interfaces/Vehiculo';
import { PropiedadesServiceService } from 'src/app/data/services/api/propiedades/propiedades-service.service';
import { VehiculosService } from 'src/app/data/services/api/vehiculos/vehiculos.service';
import { SharedTitleComponentService } from 'src/app/data/services/shared-title-component.service';
import { animacionSearch } from '../../../../../shared/exports/animacionInputSearch';

@Component({
  selector: 'app-listar-vehiculos',
  templateUrl: './listar-vehiculos.component.html',
  styleUrls: ['./listar-vehiculos.component.css']
})
export class ListarVehiculosComponent { 

  vehiculos:Vehiculo[] = [] 
  vehiculosTemp:Vehiculo[]=[]
  tiposvehiculo: any[] = [];
  propiedades: any[] = []

  selectValueTipoVehiculo:string = "0"
  selectValuePropiedad:string = "0"


  constructor(private apiService:VehiculosService ,private router:Router ,
    private sharedTitleService:SharedTitleComponentService,
    private propiedadesServiceService:PropiedadesServiceService) {
      sharedTitleService.emitChange("Lista de vehículos")

      //OBTENER TODOS LO VEHICULOS
      this.getVehiculos(String(localStorage.getItem("id_fraccionamiento")))
     }

     async ngOnInit() {
       //OBTENER LOS TIPOS DE VEHICULOS
    var data = (this.tiposvehiculo = (await this.apiService
      .getTiposVehiculos()
      .toPromise()) as any);
      data.body = data.body.map((estado: {
        id: any; nombre: string; 
      }) => {
        return {
          id:estado.id ,
          nombre: estado.nombre.toUpperCase()
        };
      });
  
      this.tiposvehiculo = data.body;
       //OBTENER LAS PROPIEDADES
    var data = (this.propiedades = (await this.propiedadesServiceService
      .propiedadesGetFiltroFraccionamiento(localStorage.getItem('id_fraccionamiento'))
      .toPromise()) as any);
      data.body = data.body.map((estado: {
        id: any;descripcion: any;
      }) => {
        return {
          id:estado.id ,
          descripcion: estado.descripcion.toUpperCase()
        };
      });
      this.propiedades = data.body;
     }

     getVehiculos(id_fraccionamiento:string){
       //alert(id_fraccionamiento)
       this.apiService.getVehiculos(id_fraccionamiento).subscribe((vehiculos:any)=>{
         this.vehiculos = vehiculos.body
         this.vehiculosTemp = vehiculos.body
       })
     }

     onSelectChangeTipoVehiculo(event: Event){
      const selectedValue = (event.target as HTMLSelectElement).value;
      this.selectValueTipoVehiculo = selectedValue
      console.log('Valor seleccionado:', selectedValue);

      this.getAllFilters()

      
     }


     onSelectChangePropiedad(event:Event){
      const selectedValue = (event.target as HTMLSelectElement).value;
      this.selectValuePropiedad = selectedValue
      console.log('Valor seleccionado:', selectedValue);

      this.getAllFilters()
     }

     getAllFilters(){
      let valuesSelectTipoVehiculo = '';
      let valuesSelectPropiedad = '';
      if(this.selectValueTipoVehiculo != '0')valuesSelectTipoVehiculo = this.selectValueTipoVehiculo

      if(this.selectValuePropiedad != '0')valuesSelectPropiedad = this.selectValuePropiedad


      this.apiService.getAllFilters(valuesSelectTipoVehiculo ,valuesSelectPropiedad).subscribe((data:any)=>{

        this.vehiculos = data.body
        this.vehiculosTemp = data.body
      })
     }

     animacionSearch(){

      animacionSearch.animacionSearch()
      /*
      const containerSearch = document.querySelector('.container-search') as HTMLInputElement
      containerSearch.style.width = '100%'
      const cerrarInputSearch = document.querySelector('.cerrarInputSearch') as HTMLAnchorElement
      cerrarInputSearch.style.display = "block"

      const inputSearch = document.querySelector('#inputSearch')  as HTMLInputElement
      inputSearch.style.width = '100%';
      inputSearch.style.borderBottomColor = 'var(--ColorSecundario)'

      
        const containerFiltros = document.querySelectorAll('.filtro')

        containerFiltros.forEach((element) => {
          if (element instanceof HTMLElement) {
            element.style.display = 'none';
          }
        });*/
     }

     cerrarAnimacioneSearch(){
      animacionSearch.cerrarAnimacioneSearch()
      animacionSearch.executeAfterTimeout()
      /*
      const cerrarInputSearch = document.querySelector('.cerrarInputSearch') as HTMLAnchorElement
      cerrarInputSearch.style.display = "none"
      const containerSearch = document.querySelector('.container-search') as HTMLInputElement
      containerSearch.style.width = 'auto'

      const inputSearch = document.querySelector('#inputSearch')  as HTMLInputElement
      inputSearch.style.width = '0';
      inputSearch.style.borderBottomColor = 'var(--ColorPrincipal)'

      this.executeAfterTimeout()
       */
       
     }

     /*
     executeAfterTimeout() {
      setTimeout(() => {
        // Tu lógica aquí
        const containerFiltros = document.querySelectorAll('.filtro')

        containerFiltros.forEach((element) => {
          if (element instanceof HTMLElement) {
            element.style.display = 'flex';
          }
        });
      }, 300); // 2000 ms = 2 segundos
    }*/

    searchVehiculo(search:any ,event:any){
      const matchingPropiedades = this.vehiculosTemp.filter((u:any) => 
        u.marca.toLowerCase().includes(search.toLowerCase()) || 
        u.placas.toLowerCase().includes(search.toLowerCase()));
      //console.log(matchingUsers);
  
      this.vehiculos = matchingPropiedades
    }

}




