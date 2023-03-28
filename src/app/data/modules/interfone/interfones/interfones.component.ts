import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { InterfonesService } from 'src/app/data/services/api/interfones/interfones.service';
import { SharedTitleComponentService } from 'src/app/data/services/shared-title-component.service';

@Component({
  selector: 'app-interfones',
  templateUrl: './interfones.component.html',
  styleUrls: ['./interfones.component.css']
})
export class InterfonesComponent implements OnInit {
  fraccionamientoId: any;
  listaPropiedades: any[] = [];
  tipoBoton: any;
  formInterfones: any;
  putInterfon: any;
  InterfonIndividual: any[] = [];

  constructor(private sharedTitleService:SharedTitleComponentService, private apiService: InterfonesService,
    private fb: FormBuilder){
    this.fraccionamientoId = localStorage.getItem('id_fraccionamiento');
    sharedTitleService.emitChange("Lista de Interfones")
  }
  
  ngOnInit() {

    this.apiService.getPropiedades(this.fraccionamientoId).subscribe((response)=>{
      this.listaPropiedades = response.body;
      console.log(this.listaPropiedades);
    });

    this.formInterfones = this.fb.group({
      numeroInterfon: ['', Validators.required],
      codigoInterfon: ['', Validators.required],
      propiedadId: ['', Validators.required],
      fraccionamientoId: ['', Validators.required],
    });
  }

  nuevoInterfon(){
    this.tipoBoton = 'post';
    this.formInterfones = this.fb.group({
      numeroInterfon: '',
      codigoInterfon: '',
      propiedadId: '',
      fraccionamientoId: '',
    });
  }

  enviarDatosAlModal(id:any){
    this.tipoBoton = 'put';
    this.putInterfon = id;
    //aqui solo se carga la informacion del renglon seleccionado en el modal
    this.apiService.getInterfon(id).subscribe((recibos:any)=>{
      this.InterfonIndividual = recibos.body;
      console.log(this.InterfonIndividual);
      this.formInterfones = this.fb.group({
        numeroInterfon: this.InterfonIndividual[0].interfones[0]?.numeroInterfon === null ? '' : this.InterfonIndividual[0].interfones[0]?.numeroInterfon,
        codigoInterfon: this.InterfonIndividual[0].interfones[0]?.codigoInterfon === null ? '' : this.InterfonIndividual[0].interfones[0]?.codigoInterfon,
        propiedadId: this.InterfonIndividual[0].id,
        fraccionamientoId: this.InterfonIndividual[0].fracionamientoId,
      });
      this.putInterfon = this.InterfonIndividual[0].interfones[0]?.numeroInterfon === null ? '' : this.InterfonIndividual[0].interfones[0]?.numeroInterfon;
    });
  }

  cambiarInterfon(){

    if(this.tipoBoton === 'post' || this.putInterfon === undefined){
      console.log("post entro");
      const payload = {
        numeroInterfon: this.formInterfones.get('numeroInterfon')?.value,
        codigoInterfon: this.formInterfones.get('codigoInterfon')?.value,
        propiedadId: this.formInterfones.get('propiedadId')?.value,
        fraccionamientoId: this.fraccionamientoId,
      }
  
      this.apiService.postInterfon(payload).subscribe((response)=>{
        console.log(response);
      });
    }else if (this.tipoBoton === 'put' && this.putInterfon !== undefined){
      console.log("put entro");
      const payload = {
        numeroInterfon: this.formInterfones.get('numeroInterfon')?.value,
        codigoInterfon: this.formInterfones.get('codigoInterfon')?.value,
        propiedadId: this.formInterfones.get('propiedadId')?.value,
        fraccionamientoId: this.fraccionamientoId,
      }
      console.log(payload);
      console.log('interfon: ' + this.putInterfon);
      this.apiService.putInterfon(this.putInterfon, payload).subscribe((response)=>{
        console.log(response);
      });
    }

    setTimeout(() => {
      this.apiService.getPropiedades(this.fraccionamientoId).subscribe((response)=>{
        this.listaPropiedades = response.body;
        console.log(this.listaPropiedades);
      });
    }, 2000);

  }


}
