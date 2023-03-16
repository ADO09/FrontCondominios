import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { propietarios } from 'src/app/data/interfaces/propietariosI';
import { PropietariosService } from 'src/app/data/services/api/propietarios/propietarios.service';
import { SharedTitleComponentService } from 'src/app/data/services/shared-title-component.service';
import { enviroment as ENV } from 'src/environments/enviroments.dev';
@Component({
  selector: 'app-modal-gestion-propietario',
  templateUrl: './modal-gestion-propietario.component.html',
  styleUrls: ['./modal-gestion-propietario.component.css']
})
export class ModalGestionPropietarioComponent {
  @Input() cerrarModal: any;
  @Input() propietarioDatos!: propietarios;
  public idFraccionamientoUsuer: any;
  public FormPropietarios!: FormGroup;
  public formData = new FormData();
  public api = ENV.urlAPI;
  constructor(private fb: FormBuilder,private sharedTitleService:SharedTitleComponentService,private propietarioService: PropietariosService) {
    sharedTitleService.emitChange("Registrar Propietario")
   }
  ngOnInit() {
    
    
    this.idFraccionamientoUsuer = localStorage.getItem('id_fraccionamiento');
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
        identificacionUrl: [''],
        // fraccionamientoId: ['', Validators.required]
      });
    }
  }


  enviarModal(){


    console.log(this.FormPropietarios.value);

    this.formData.append('fraccionamientoId', this.idFraccionamientoUsuer)
    const controls = this.FormPropietarios.controls;
    for (const name in controls) {

      if (controls[name].value !== null && controls[name].value !== '') {
        if (name != 'identificacionUrl') {
          this.formData.append(name, controls[name].value);
        }
      }
    }
 
    for (const name in controls) {
      if (controls[name].value !== null && controls[name].value !== '') {
        console.log(name +' ' +this.formData.get(name));
      }
    }

    // if (!this.formData.get('archivoIdentificacion')) {
    //   this.formData.delete('archivoIdentificacion')
    // }
    // console.log(this.formData.get('archivoIdentificacion'));
    this.propietarioService.PropietariosPATCHUptdate(this.propietarioDatos.id,this.formData).subscribe((r) => {

      console.log(r);



    })
  }


  archivo() {
    (document.querySelector("#inputfile") as HTMLInputElement).click();
  }

  selectedFilePredial(event: any) {
    if (event.target.files) {

      // this.selectedFile = event.target.files[0];
      // console.log(this.selectedFile);

      this.formData.set('archivoIdentificacion', event.target.files[0]);
      //this.FormPropietarios.get('identificacionUrl')?.setValue(event.target.files[0]);
      // this.FormPropietarios.patchValue({
      //   identificacionUrl: event.target.files[0]
      // });
    }
  }


  ngOnChanges(){


    if (this.propietarioDatos) {
console.log(this.propietarioDatos.identificacionUrl);
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
