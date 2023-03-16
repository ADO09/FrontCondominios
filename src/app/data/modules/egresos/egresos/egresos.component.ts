import { Component, OnInit } from '@angular/core';
import { EgresosService } from 'src/app/data/services/api/egresos/egresos.service';
import { SharedTitleComponentService } from 'src/app/data/services/shared-title-component.service';

@Component({
  selector: 'app-egresos',
  templateUrl: './egresos.component.html',
  styleUrls: ['./egresos.component.css']
})
export class EgresosComponent implements OnInit {
  page!:number;
  listaEgresos: any[] = [];
  fraccionamientoId:any;


  constructor(private apiService:EgresosService,private sharedTitleService:SharedTitleComponentService){
    this.fraccionamientoId = localStorage.getItem('id_fraccionamiento');
    sharedTitleService.emitChange("Lista de egresos")
  }

  ngOnInit(){
    this.apiService.getEgresos(this.fraccionamientoId).subscribe((recibos:any)=>{
      this.listaEgresos = recibos.body;
      console.log(this.listaEgresos);
    });
  }
}
