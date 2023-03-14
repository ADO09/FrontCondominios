import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { propietarios } from 'src/app/data/interfaces/propietariosI';
import { SharedTitleComponentService } from 'src/app/data/services/shared-title-component.service';

@Component({
  selector: 'app-modal-gestion-propietario',
  templateUrl: './modal-gestion-propietario.component.html',
  styleUrls: ['./modal-gestion-propietario.component.css']
})
export class ModalGestionPropietarioComponent {
  @Input() cerrarModal: any;
  @Input() propietarioDatos!: propietarios;

  public FormPropietarios!: FormGroup;

  constructor(private fb: FormBuilder,private sharedTitleService:SharedTitleComponentService) {
    sharedTitleService.emitChange("Registrar Propietario")
   }
  ngOnInit() {

    if (!this.propietarioDatos) {
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
  }


  enviarModal(){

  }


  ngOnChanges(){


    if (this.propietarioDatos) {

      this.FormPropietarios = this.fb.group({
        // id: ['', Validators.required],
        nombre: [this.propietarioDatos.nombre, Validators.required],
        apellidos: [this.propietarioDatos.apellidos, Validators.required],
        correo: [this.propietarioDatos.correo, Validators.required],
        telefonoFijo: [this.propietarioDatos.telefonoFijo, Validators.required],
        celular: [this.propietarioDatos.celular, Validators.required],
        celularAlt: [this.propietarioDatos.celularAlt, Validators.required],
        claveInterfon: [this.propietarioDatos.claveInterfon, Validators.required],
        claveInterfonAlt: [this.propietarioDatos.claveInterfonAlt, Validators.required],
        isInquilino:  ([this.propietarioDatos.isInquilino, Validators.required]),
        identificacionUrl: [this.propietarioDatos.identificacionUrl, Validators.required],
        // fraccionamientoId: ['', Validators.required]
      });
    }
    
  }


}
