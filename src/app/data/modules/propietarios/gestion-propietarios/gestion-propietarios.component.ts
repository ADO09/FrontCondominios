import { Component } from '@angular/core';
import { PropietariosService } from 'src/app/data/services/api/propietarios/propietarios.service';
import { SharedTitleComponentService } from 'src/app/data/services/shared-title-component.service';

@Component({
  selector: 'app-gestion-propietarios',
  templateUrl: './gestion-propietarios.component.html',
  styleUrls: ['./gestion-propietarios.component.css']
})
export class GestionPropietariosComponent {
  public idFraccionamientoUsuer:any;
 
  constructor(private propietariosService:PropietariosService, private sharedTitleService:SharedTitleComponentService) { 
    sharedTitleService.emitChange("Gestion de Propietario")
  }

  public propietariosData!:any[];
  ngOnInit(): void {
    this.idFraccionamientoUsuer = localStorage.getItem('id_fraccionamiento');
    this.propietariosService.GetPropietariosQPFraccionamientoQPIsinquilino(this.idFraccionamientoUsuer).subscribe( (r) => {

      this.propietariosData = r.body;
      console.log(r);
      console.log(this.propietariosData);
      
    });
  }




}
