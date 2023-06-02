import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { INTERNAL_ROUTES } from 'src/app/data/constants/routes/internal.routes';
import { propiedad } from 'src/app/data/interfaces/propiedad';
import { animacionSearch } from '../../../../shared/exports/animacionInputSearch';
import { PropiedadesServiceService } from 'src/app/data/services/api/propiedades/propiedades-service.service';



@Component({
  selector: 'app-list-propiedades',
  templateUrl: './list-propiedades.component.html',
  styleUrls: ['./list-propiedades.component.css'],
})
export class ListPropiedadesComponent implements OnInit {
  @Input() propiedadesData!: propiedad[];
  form: any;
  currentPropiedad!: any;
  public regPropiedadRoute:any;
  propiedadesTemp!:any[]
  constructor(private formBuilder: FormBuilder,private servicePropiedades:PropiedadesServiceService) {


    this.regPropiedadRoute =  INTERNAL_ROUTES.MODULO_REGPROPIEDAD;
    //this.propiedadesTemp = [...this.propiedadesData]

  }

  ngOnInit(): void {
    //this.propiedadesTemp = Object.values(this.propiedadesData);
    console.log("propiedades "+this.propiedadesData)
  }

  getPropiedadesFilters(event:Event){
    const selectedValue = (event.target as HTMLSelectElement).value;

    this.servicePropiedades.getPropiedesFilters(selectedValue).subscribe((data:any)=>{
      this.propiedadesData = data.body
    })

  }

  abrirModal(datos: any): any {
    //console.log('antes de');
    //console.log(datos);

    this.currentPropiedad =datos;

    console.log(this.currentPropiedad);
    
    // console.log(this.currentPropiedad.inquilino );
    setTimeout(() => {
      var divModl = document.getElementById('id01') as HTMLDivElement;
      divModl.style.display = 'block';
    }, 100);
  }

  closeModal() {
    const modal = document.getElementById('id01');
    if (modal) {
      modal.style.display = 'none';
    }
    this.currentPropiedad = null;
  }

  addPropiedadModal(){
    setTimeout(() => {
      var divModl2 = document.getElementById('id02') as HTMLDivElement;
      divModl2.style.display = 'block';
    }, 100);
  }

  envModal2() {
    var divModl2 = document.getElementById('id02') as HTMLDivElement;
    divModl2.style.display = 'none';
  }

  envModal() {
    var divModl = document.getElementById('id01') as HTMLDivElement;
    divModl.style.display = 'none';
  }

  animacionSearch(){
    animacionSearch.animacionSearch()
  }
  searchVehiculo(search:any ,event:any){
    const matchingPropiedades = this.propiedadesTemp.filter((u:any) => 
    u.descripcion.toLowerCase().includes(search.toLowerCase()) || 
    u.propietario.nombre.toLowerCase().includes(search.toLowerCase()));
  //console.log(matchingUsers);

    this.propiedadesData = matchingPropiedades
  }

  cerrarAnimacioneSearch(){
    animacionSearch.cerrarAnimacioneSearch()
  }
}
