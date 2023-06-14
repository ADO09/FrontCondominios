import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { propiedad } from 'src/app/data/interfaces/propiedad';
import { propietarios } from 'src/app/data/interfaces/propietariosI';
import { PropiedadesServiceService } from 'src/app/data/services/api/propiedades/propiedades-service.service';
import { PropietariosService } from 'src/app/data/services/api/propietarios/propietarios.service';
import { UpdateDataService } from 'src/app/data/services/update-data.service';
import { enviroment as ENV } from 'src/environments/enviroments.dev';

@Component({
  selector: 'app-modal-list-propiedades',
  templateUrl: './modal-list-propiedades.component.html',
  styleUrls: ['./modal-list-propiedades.component.css'],
})
export class ModalListPropiedadesComponent implements OnInit {
  @Input() cerrarModal: any;
  @Input() propiedadDatos!: any;
  public inquilinoSelect: propietarios | null = null;
  public propietarioSelect: propietarios | null = null;
  public propietariosDataI!: propietarios[];
  public propietariosDataP!: propietarios[];
  public formPropiedades!: FormGroup;
  public formData = new FormData();
  public selectedFile: File | undefined;
  public pdfUrl: any;
  public api = ENV.urlAPI;
  public idfraccionamiento: any;
  constructor(
    private fb: FormBuilder,
    private propietariosService: PropietariosService,
    private propiedadesService: PropiedadesServiceService,
    private updateDService:UpdateDataService
  ) {
    this.idfraccionamiento = localStorage.getItem('id_fraccionamiento');



  }

  ngOnInit() {
    this.propietariosService
      .propietariosGetInquilinos(this.idfraccionamiento)
      .subscribe((r) => {
        // this.propiedadesData = r.body;
        console.log(r);
        // console.log(this.propiedadesData);
        this.propietariosDataI = r.body;
      });

    this.propietariosService
      .propietariosGetPropietarios(this.idfraccionamiento)
      .subscribe((r) => {
        // this.propiedadesData = r.body;
        console.log(r);
        // console.log(this.propiedadesData);
        this.propietariosDataP = r.body;
      });

    if (!this.propiedadDatos) {
      this.formPropiedades = this.fb.group({
        tipoPropiedadId: ['', Validators.required],
        claveCatastral: ['', Validators.required],
        descripcion: ['', Validators.required],
        superficie: ['', Validators.required],
        balance: [0],
        lote: ['', Validators.required],
        estatusId: [''],
        propietarioId: ['', Validators.required],
        inquilinoId: [''],
        fraccionamientoId: ['', Validators.required],
        archivoPredial: [''],
      });
    } else {
      // let propiedad =
      //   this.propiedadDatos?.tipoPropiedad.id +
      //   '.-' +
      //   this.propiedadDatos?.tipoPropiedad.descripcion;
      //   console.log(this.propiedadDatos.estatus.id);
      //   let estatus =
      //   this.propiedadDatos?.estatus.id +
      //   '.-' +
      //   this.propiedadDatos?.estatus.descripcion;
      // this.formPropiedades = this.fb.group({
      //   tipoPropiedadId: propiedad || '',
      //   claveCatastral: this.propiedadDatos?.claveCatastral || '',
      //   descripcion: this.propiedadDatos?.descripcion || '',
      //   superficie: this.propiedadDatos?.superficie || '',
      //   balance: this.propiedadDatos?.balance || '',
      //   estatusId: estatus || '',
      //   propietarioId: this.propiedadDatos?.propietario.nombre || '',
      //   inquilinoId: this.propiedadDatos?.inquilino.nombre ?? null,
      //   fraccionamientoId: this.propiedadDatos?.fraccionamientoId || '',
      // //  archivoPredial: this.propiedadDatos?.predialUrl || '',
      // });
    }
  }

  ngOnChanges() {
    if (this.propiedadDatos) {
      // let propiedad =
      //   this.propiedadDatos?.tipoPropiedad.id +
      //   '.-' +
      //   this.propiedadDatos?.tipoPropiedad.descripcion;

      //   let estatus =
      //   this.propiedadDatos?.estatus.id +
      //   '.-' +
      //   this.propiedadDatos?.estatus.descripcion;
      console.log('AOIWJEA');
      console.log(this.propiedadDatos.predialUrl);
      this.propietarioSelect = this.propiedadDatos.propietario;

      var inquilino: any;
      if (!this.propiedadDatos.inquilino) {
        inquilino = this.propiedadDatos.inquilino;
      } else {
        inquilino =
          this.propiedadDatos.inquilino.nombre +
          ' ' +
          this.propiedadDatos.inquilino.apellidos;
        this.inquilinoSelect = this.propiedadDatos.inquilino;
      }

      // console.log( "AQUI ESTA-->"+ this.propiedadDatos.inquilino.id);
      // console.log( "AQUI ESTA-->"+ this.propiedadDatos.propietario.id);

      // this.formPropiedades = this.fb.group({
      //   tipoPropiedadId:  String(this.propiedadDatos?.tipoPropiedad.id) || '',
      //   claveCatastral: this.propiedadDatos?.claveCatastral || '',
      //   descripcion: this.propiedadDatos?.descripcion || '',
      //   superficie: this.propiedadDatos?.superficie || '',
      //   balance: this.propiedadDatos?.balance || '',
      //   estatusId:  String(this.propiedadDatos?.estatus.id)|| '',
      //   propietarioId: [this.propiedadDatos?.propietario.nombre + ' ' + this.propiedadDatos.propietario.apellidos || '',Validators.required],
      //   inquilinoId: inquilino || null,
      //   fraccionamientoId: this.propiedadDatos?.fraccionamientoId || '',
      //   archivoPredial: this.propiedadDatos?.predialUrl || '',
      // });
      console.log('lote ' + this.propiedadDatos?.lote);
      this.formPropiedades = this.fb.group({
        tipoPropiedadId: [
          String(this.propiedadDatos?.tipoPropiedad.id) || '',
          Validators.required,
        ],
        claveCatastral: [
          this.propiedadDatos?.claveCatastral || '',
          Validators.required,
        ],
        descripcion: [
          this.propiedadDatos?.descripcion || '',
          Validators.required,
        ],
        superficie: [
          this.propiedadDatos?.superficie || '',
          Validators.required,
        ],
        balance: [this.propiedadDatos?.balance || 0],
        estatusId: [String(this.propiedadDatos?.estatus) || ''],
        lote: [this.propiedadDatos?.lote || ''],
        propietarioId: [
          this.propiedadDatos?.propietario.nombre +
          ' ' +
          this.propiedadDatos.propietario.apellidos || '',
          Validators.required,
        ],
        inquilinoId: inquilino || null,
        fraccionamientoId: [
          this.propiedadDatos?.fraccionamientoId || '',
          Validators.required,
        ],
        archivoPredial: ['' || ''],
      });
    }
  }

  enviarModal() {
    console.log(this.formPropiedades.value);
    console.log(this.propiedadDatos);
    console.log(this.propiedadDatos.id);

    var idProp: any = this.propietarioSelect?.id;

    this.formData.append('balance', this.formPropiedades.value.balance);
    this.formData.append(
      'claveCatastral',
      this.formPropiedades.value.claveCatastral
    );
    this.formData.append('descripcion', this.formPropiedades.value.descripcion);
    this.formData.append('estatus', this.formPropiedades.value.estatusId);
    this.formData.append(
      'fraccionamientoId',
      this.formPropiedades.value.fraccionamientoId
    );

    // if (this.propiedadDatos.inquilino) {
    //   this.formData.append('inquilinoId', this.formPropiedades.value.inquilinoId);
    // }

    if (!this.formData.get('propietarioId')) {
      var idProp: any = this.propietarioSelect?.id;
      this.formData.append('propietarioId', idProp);
    }

    this.formData.append('superficie', this.formPropiedades.value.superficie);
    this.formData.append(
      'tipoPropiedadId',
      this.formPropiedades.value.tipoPropiedadId
    );
    this.formData.append(
      'lote',
      this.formPropiedades.value.lote
    );

    if (!this.formData.get('inquilinoId')) {
      this.propiedadesService
        .ElmInquilinoNull(this.propiedadDatos.id)
        .subscribe((r) => {
          console.log(r);
        });
    }

    // console.log(this.formData.get('balance'));
    // console.log(this.formData.get('claveCatastral'));
    // console.log(this.formData.get('descripcion'));
    // console.log(this.formData.get('estatusId'));
    // console.log(this.formData.get('fraccionamientoId'));
    // console.log(this.formData.get('inquilinoId'));
    // console.log(this.formData.get('propietarioId'));
    // console.log(this.formData.get('superficie'));
    // console.log(this.formData.get('tipoPropiedadId'));

    this.propiedadesService
      .propiedadesUpdate(this.propiedadDatos.id, this.formData)
      .subscribe((r) => {
        console.log(r);

        if (r.icon == 'success') {


          this.updateDService.emitChange('hola');
          this.cerrarModal();
        }
      });
  }

  selectedFilePredial(event: any) {
    if (event.target.files) {
      this.formData.set('archivoPredial', event.target.files[0]);
    }
  }

  archivo() {
    (document.querySelector('#inputfile') as HTMLInputElement).click();
  }

  manejarDato(dato: any) {
    this.inquilinoSelect = dato;
    console.log(this.inquilinoSelect?.nombre);
    this.formPropiedades.patchValue({
      inquilinoId: [
        this.inquilinoSelect?.nombre + ' ' + this.inquilinoSelect?.apellidos,
      ],
    });

    this.formData.append('inquilinoId', dato.id);
  }

  manejarDatoP(dato: any) {
    this.propietarioSelect = dato;
    console.log(this.propietarioSelect?.nombre);
    this.formPropiedades.patchValue({
      propietarioId: [
        this.propietarioSelect?.nombre +
        ' ' +
        this.propietarioSelect?.apellidos,
      ],
    });

    this.formData.append('propietarioId', dato.id);
  }

  envModalI() {
    var divModI = document.getElementById('id0I') as HTMLDivElement;
    divModI.style.display = 'none';
  }

  envModalP() {
    var divModlP = document.getElementById('id0P') as HTMLDivElement;
    divModlP.style.display = 'none';
  }

  abrModalinquilinos() {
    setTimeout(() => {
      var divModi = document.getElementById('id0I') as HTMLDivElement;
      divModi.style.display = 'block';
    }, 100);
  }

  abrModalPropietarios() {
    setTimeout(() => {
      var divModlp = document.getElementById('id0P') as HTMLDivElement;
      divModlp.style.display = 'block';
    }, 100);
  }

  handleClearInput() {
    this.inquilinoSelect = null;
    this.formPropiedades.patchValue({
      inquilinoId: null,
    });

    // var inqid: any = null;
    // this.formData.append('inquilinoId', inqid);

    console.log();
  }

  handleClearInput2() {
    this.propietarioSelect = null;
    this.formPropiedades.patchValue({
      propietarioId: null,
    });
    // this.formPropiedades.get('propietarioId')?.setValidators([Validators.required]);
    // this.formPropiedades.get('propietarioId')?.updateValueAndValidity();

    this.formData.append('propietarioId', '');
    console.log(this.formPropiedades.valid);
  }




  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
    this.formPropiedades.value.archivoPredial = event.target.files[0];

    const file = event.target.files[0];
    this.formData.set('archivoPredial', file);

    // const reader = new FileReader();
    // reader.onload = (e: any) => {
    //   this.pdfUrl = e.target.result;
    // };
    // reader.readAsDataURL(file);
  }
  clickInputFile() {
    (document.querySelector('#inputFile') as HTMLInputElement).click();
  }

  previewFile() {

  }
}
