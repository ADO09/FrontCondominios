import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { TarjetasRfdiService } from 'src/app/data/services/api/tarjetas-rfdi/tarjetas-rfdi.service';
import { SharedTitleComponentService } from 'src/app/data/services/shared-title-component.service';

@Component({
  selector: 'app-tarjetas-rfdi',
  templateUrl: './tarjetas-rfdi.component.html',
  styleUrls: ['./tarjetas-rfdi.component.css']
})
export class TarjetasRfdiComponent implements OnInit{
  fraccionamientoId: any;
  listaTarjetas: any[] = [];
  listaPropiedades: any[] = [];
  formRFDI: any;
  RFDI_Individual: any;
  tipoBoton: any;
  putRFDI: any;


  constructor(private sharedTitleService:SharedTitleComponentService, private apiService:TarjetasRfdiService,
    private fb: FormBuilder){
    this.fraccionamientoId = localStorage.getItem('id_fraccionamiento');
    sharedTitleService.emitChange("Lista de tarjetas RFDI")
  }
  
  
  ngOnInit(): void {
    this.apiService.getTarjetas(this.fraccionamientoId).subscribe((response)=>{
      this.listaTarjetas = response.body;
      console.log(this.listaTarjetas);
    });
    this.apiService.getPropiedades(this.fraccionamientoId).subscribe((response)=>{
      this.listaPropiedades = response.body;
      console.log(this.listaPropiedades);
    });

    this.formRFDI = this.fb.group({
      tipo: ['', Validators.required],
      rfdi: ['', Validators.required],
      propiedadId: ['', Validators.required],
      fraccionamientoId: ['', Validators.required],
    });
  }

  enviarDatosAlModal(rfdi:any) {
    this.tipoBoton = 'put';
    this.putRFDI = rfdi;
    //aqui solo se carga la informacion del renglon seleccionado en el modal
    this.apiService.getRFDI(rfdi).subscribe((recibos:any)=>{
      this.RFDI_Individual = recibos.body;
      console.log(this.RFDI_Individual);
      this.formRFDI = this.fb.group({
        tipo: this.RFDI_Individual[0].tipo,
        rfdi: this.RFDI_Individual[0].rfdi,
        propiedadId: this.RFDI_Individual[0].propiedadId.id,
        fraccionamientoId: this.RFDI_Individual[0].fraccionamientoId,
      });
    });
  }

  cambiarRFDI(){

    if(this.tipoBoton === 'post'){
      const payload = {
        rfdi: this.formRFDI.get('rfdi')?.value,
        tipo: this.formRFDI.get('tipo')?.value,
        propiedadId: this.formRFDI.get('propiedadId')?.value,
        fraccionamientoId: this.fraccionamientoId
      }
  
      this.apiService.postRFDI(payload).subscribe((response)=>{
        console.log(response);
      });
    }else if (this.tipoBoton === 'put'){
      const payload = {
        tipo: this.formRFDI.get('tipo')?.value,
        propiedadId: this.formRFDI.get('propiedadId')?.value,
      }
      console.log(payload);
      this.apiService.putRFDI(this.putRFDI, payload).subscribe((response)=>{
        console.log(response);
      });
    }

    setTimeout(() => {
      this.apiService.getTarjetas(this.fraccionamientoId).subscribe((response)=>{
        this.listaTarjetas = response.body;
        console.log(this.listaTarjetas);
      });
    }, 2000);

  }

  nuevoRFDI(){
    this.tipoBoton = 'post';
    this.formRFDI = this.fb.group({
      tipo: '',
      rfdi: '',
      propiedadId: '',
      fraccionamientoId: '',
    });
  }


}
