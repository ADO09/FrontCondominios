import { Component, OnInit } from '@angular/core';
import { SharedTitleComponentService } from 'src/app/data/services/shared-title-component.service';

@Component({
  selector: 'app-tarjetas-rfdi',
  templateUrl: './tarjetas-rfdi.component.html',
  styleUrls: ['./tarjetas-rfdi.component.css']
})
export class TarjetasRfdiComponent implements OnInit{
  fraccionamientoId: any;



  constructor(private sharedTitleService:SharedTitleComponentService){
    this.fraccionamientoId = localStorage.getItem('id_fraccionamiento');
    sharedTitleService.emitChange("Lista de tarjetas RFDI")
  }
  
  
  ngOnInit(): void {
  
  }
listaTarjetas: any[] = [];

}
