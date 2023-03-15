import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IngresosService } from 'src/app/data/services/api/ingresos/ingresos.service';
import { PropietariosService } from 'src/app/data/services/api/propietarios/propietarios.service';
import { SharedTitleComponentService } from 'src/app/data/services/shared-title-component.service';

@Component({
  selector: 'app-reg-propietarios',
  templateUrl: './reg-propietarios.component.html',
  styleUrls: ['./reg-propietarios.component.css']
})
export class RegPropietariosComponent {
  public FormPropietarios!: FormGroup;
  public formData = new FormData();
  public selectedFile!: any;
  public idFraccionamientoUsuer: any;
  constructor(private fb: FormBuilder, private sharedTitleService: SharedTitleComponentService, private propietarioService: PropietariosService) {
    sharedTitleService.emitChange("Registrar Residente")
  }
  ngOnInit() {
    this.idFraccionamientoUsuer = localStorage.getItem('id_fraccionamiento');
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
      identificacionUrl: [, Validators.required],
      // fraccionamientoId: ['', Validators.required]
    });
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

  enviarModal() {

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
    // if (!this.selectedFile) {
    //   this.formData.append('identificacionUrl', this.selectedFile);
    // }else{
    //   this.formData.delete('identificacionUrl');
    // }
    // console.log(formData.get('nombre'));
    // console.log(formData.get('apellidos'));
    // console.log(formData.get('correo'));
    // console.log(formData.get('telefonoFijo'));
    // console.log(formData.get('celular'));
    // console.log(formData.get('celularAlt'));
    // console.log(formData.get('identificacionUrl'));

    for (const name in controls) {
      if (controls[name].value !== null && controls[name].value !== '') {
        console.log(this.formData.get(name));
      }
    }

    console.log(this.formData.get('archivoIdentificacion'));
    this.propietarioService.AddPropietario(this.formData).subscribe((r) => {
      console.log(r);

    })



  }
}
