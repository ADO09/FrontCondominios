import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IngresosService } from 'src/app/data/services/api/ingresos/ingresos.service';
import { SharedTitleComponentService } from 'src/app/data/services/shared-title-component.service';

@Component({
  selector: 'app-reg-propietarios',
  templateUrl: './reg-propietarios.component.html',
  styleUrls: ['./reg-propietarios.component.css']
})
export class RegPropietariosComponent {
  public FormPropietarios!: FormGroup;

  constructor(private fb: FormBuilder,private sharedTitleService:SharedTitleComponentService) {
    sharedTitleService.emitChange("Registrar Propietario")
   }
   ngOnInit() {
    this.FormPropietarios = this.fb.group({
      // id: ['', Validators.required],
      nombre: ['', Validators.required],
      apellidos: ['', Validators.required],
      correo: ['', Validators.required],
      telefonoFijo: ['', Validators.required],
      celular: ['', Validators.required],
      celularAlt: ['', Validators.required],
      claveInterfon: ['', Validators.required],
      claveInterfonAlt: ['', Validators.required],
      isInquilino: ['', Validators.required],
      identificacionUrl: ['', Validators.required],
      // fraccionamientoId: ['', Validators.required]
    });
  }

   enviarModal(){

    console.log(this.FormPropietarios.value);
    
  }
}
