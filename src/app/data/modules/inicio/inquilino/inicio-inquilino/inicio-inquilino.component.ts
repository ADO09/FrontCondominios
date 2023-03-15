import { Component, OnInit, ViewChild } from '@angular/core';
import { recibo } from 'src/app/data/interfaces/recibo';
import { Recibos } from 'src/app/data/models/recibos.model';
import { InquilinosService } from 'src/app/data/services/api/inquilinos/inquilinos.service';
import { PropietariosService } from 'src/app/data/services/api/propietarios/propietarios.service';
import { SharedTitleComponentService } from 'src/app/data/services/shared-title-component.service';
import { ListRecibosInquilinoComponent } from 'src/app/shared/components/list/list-recibos-inquilino/list-recibos-inquilino.component';

@Component({
  selector: 'app-inicio-inquilino',
  templateUrl: './inicio-inquilino.component.html',
  styleUrls: ['./inicio-inquilino.component.css']
})
export class InicioInquilinoComponent implements OnInit{
  selectedOption!: string;
  tipoUsuario:any;
  fraccionamientoId:any;
  listaConfiguraciones: any;
  listaPropietarios: any;
  listaInquilinos: any;
  listaPropiedades: any;
  tipoLista:number = 0;
  RecibosFiltrados:any[] = [];
  

  constructor(private apiService:InquilinosService, private apiServicePropietario:PropietariosService,private sharedTitleService:SharedTitleComponentService) {
    this.fraccionamientoId = localStorage.getItem('id_fraccionamiento');
    sharedTitleService.emitChange("Lista de Recibos")
  }
  
  @ViewChild(ListRecibosInquilinoComponent)
  ListRecibosInquilinoComponent!: ListRecibosInquilinoComponent;
  actualizarLista(){//ID DEL INQUILINO O PROPIETARIO A FILTRAR LOS RECIBOS

    for (let i = 0; i < this.listaPropiedades.length; i++) {
      if (this.listaPropiedades[i].propietario.id === 218 ||  216){
        this.RecibosFiltrados[i] = this.listaPropiedades[i].propietario.id;
      }
    }
    console.log(this.RecibosFiltrados);
    const nuevosRecibos: Recibos[] = this.RecibosFiltrados;
    this.ListRecibosInquilinoComponent.actualizarListaMostrada(nuevosRecibos);
  }


  ngOnInit(){
    this.apiService.GetPropietariosQPFraccionamientoQPIsinquilino(this.fraccionamientoId,1).subscribe((propietarios:any)=>{
      this.listaPropietarios = propietarios.body;
      //console.log(this.listaPropietarios);
    })

    this.apiService.GetPropietariosQPFraccionamientoQPIsinquilino(this.fraccionamientoId,0).subscribe((inquilinos:any)=>{
      this.listaInquilinos = inquilinos.body;
      //console.log(this.listaInquilinos);
    })

    this.apiService.propiedadesGetFiltroFraccionamiento(this.fraccionamientoId).subscribe((propiedades:any)=>{
      this.listaPropiedades = propiedades.body;
      //console.log(this.listaPropiedades);
    })


  } 

  cambiarLista(id:any): any{
    console.log(id);
  }


  abrirModal(): any {

    
    var divModl =  document.getElementById('id02') as HTMLDivElement;
    divModl.style.display = 'block';
  }
  closeModal() {
    const modal = document.getElementById('id02');
  if (modal) {
    modal.style.display = 'none';
  }
  }

  envModal(){
    
   var divModl =  document.getElementById('id02') as HTMLDivElement;
   divModl.style.display = 'none';

  }
}
