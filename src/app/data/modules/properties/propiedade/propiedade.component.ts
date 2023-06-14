import { Component, OnInit } from '@angular/core';
import { PropiedadesServiceService } from 'src/app/data/services/api/propiedades/propiedades-service.service';
import { animacionSearch } from '../../../../shared/exports/animacionInputSearch';
import { INTERNAL_ROUTES } from 'src/app/data/constants/routes/internal.routes';
import { SharedTitleComponentService } from 'src/app/data/services/shared-title-component.service';

@Component({
  selector: 'app-propiedade',
  templateUrl: './propiedade.component.html',
  styleUrls: ['./propiedade.component.css']
})
export class PropiedadeComponent implements OnInit {
  public idFraccionamientoUsuer:any;
  public regPropiedadRoute:any;
  constructor(private propiedadesService:PropiedadesServiceService, private sharedTitleService: SharedTitleComponentService,) { 
    this.regPropiedadRoute =  INTERNAL_ROUTES.MODULO_REGPROPIEDAD;
    sharedTitleService.emitChange("Lista de Propiedades")
  }

  public propiedadesData!:any[];
  propiedadesTemp!:any[]
  ngOnInit(): void {
    this.idFraccionamientoUsuer = localStorage.getItem('id_fraccionamiento');
    // console.log(this.idFraccionamientoUsuer);
    this.propiedadesService.propiedadesGetFiltroFraccionamiento(this.idFraccionamientoUsuer).subscribe( (r) => {

      this.propiedadesData = r.body;
      this.propiedadesTemp = r.body;
      // console.log(r);
      // console.log(this.propiedadesData);
      
    });
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


  getPropiedadesFilters(event:Event){
    const selectedValue = (event.target as HTMLSelectElement).value;

    var valuesSelectTipoPropiedad = ''
    if(selectedValue != '-1')valuesSelectTipoPropiedad = selectedValue

    this.propiedadesService.getPropiedesFilters(valuesSelectTipoPropiedad).subscribe((data:any)=>{
      this.propiedadesData = data.body;
      this.propiedadesTemp = data.body;
    })

  }

  cerrarAnimacioneSearch(){
    animacionSearch.cerrarAnimacioneSearch()
  }

}
