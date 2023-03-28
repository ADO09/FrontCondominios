import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InquilinosService } from 'src/app/data/services/api/inquilinos/inquilinos.service';

@Component({
  selector: 'app-modal-list-recibos',
  templateUrl: './modal-list-recibos.component.html',
  styleUrls: ['./modal-list-recibos.component.css']
})
export class ModalListRecibosComponent implements OnInit{
  @Input() cerrarModal:any;

  selectedOption: string;
  plazoOption: string;
  year:boolean = false;

  public formRecibo!: FormGroup;
  idFraccionamiento: any;
  fraccionamientoId: string | null;
  listaConfiguraciones: any;

  yearsList: any;

  constructor(private fb: FormBuilder, 
    private inquilinoService:InquilinosService){ 
      this.fraccionamientoId = localStorage.getItem('id_fraccionamiento');
      this.selectedOption = '';
      this.plazoOption = '';
     }
  ngOnInit(){

    this.generarYears();
  
    this.inquilinoService.getConfigPagos(this.fraccionamientoId).subscribe((configuraciones:any)=>{
      this.listaConfiguraciones = configuraciones.body;
    });
    ////
    this.idFraccionamiento = localStorage.getItem('id_fraccionamiento');
    this.formRecibo = this.fb.group({
      Id_Fraccionamiento: this.idFraccionamiento,
      configuracionId: ['', Validators.required],
      plazoPorGenerar: ['', Validators.required],
      year: ['',  Validators.required],
    });
  }

  generarYears() {
    interface Year {
      year: number;
    }
    
    const currentYear: number = new Date().getFullYear();
    const yearsList: Year[] = [];
    
    for (let i = 0; i < 10; i++) {
      const year: Year = {
        year: currentYear + i,
      };
      yearsList.push(year);
    }
    this.yearsList = yearsList;
    console.log(yearsList);
    
  }

  cambiarTipo() {
    if(this.year){
      this.year = false;
      console.log(this.year);
    }else if(!this.year) {
      this.year = true;
      console.log(this.year);
    }
  }

  enviarInfo(){
    let payload;
    console.log(this.formRecibo.get('year')?.value);
    if(this.year){
       payload = {
        Id_Fraccionamiento: this.idFraccionamiento,
        configuracionId: this.formRecibo.get('configuracionId')?.value,
        year: this.formRecibo.get('year')?.value,
  
      }
    } else {
       payload = {
        Id_Fraccionamiento: this.idFraccionamiento,
        configuracionId: this.formRecibo.get('configuracionId')?.value,
        plazoPorGenerar:  this.formRecibo.get('plazoPorGenerar')?.value,
      }
    }


    this.inquilinoService.postRecibo(payload).subscribe((data:any)=>{
      console.log(data);
    });

  }
}
