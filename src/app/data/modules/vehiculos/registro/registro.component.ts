import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Vehiculo } from 'src/app/data/interfaces/Vehiculo';
import { VehiculosService } from 'src/app/data/services/api/vehiculos/vehiculos.service';
import { SharedTitleComponentService } from 'src/app/data/services/shared-title-component.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
})
export class RegistroComponent {
  claveCatastral!: string;
  estados: any[] = [];
  tiposvehiculo: any[] = [];
  selectedFile: File | undefined;
  idPropietario: string | undefined;
  idPropiedad: string | undefined;
  pdfUrl: any;

  propiedades:any[]=[]
  propiedadesTemp:any[]=[]
  showModal = false

  constructor(
    private apiService: VehiculosService,
    private router: Router,
    private sharedTitleService: SharedTitleComponentService
  ) {
    sharedTitleService.emitChange('Registrar vehículo');
  }
  async ngOnInit() {
    //OBTENER ESATODOS DE MEXICO
    var data = (await this.apiService.getEstadosMexico().toPromise()) as any;
    

    data.body = data.body.map((estado: {
      id: any; nombre: string; 
    }) => {
      return {
        id:estado.id ,
        nombre: estado.nombre.toUpperCase()
      };
    });

    this.estados = data.body;
    

    //OBTENER LOS TIPOS DE VEHICULOS
    var data = (this.tiposvehiculo = (await this.apiService
      .getTiposVehiculos()
      .toPromise()) as any);
      data.body = data.body.map((estado: {
        id: any; nombre: string; 
      }) => {
        return {
          id:estado.id ,
          nombre: estado.nombre.toUpperCase()
        };
      });
  
      this.tiposvehiculo = data.body;

  

    var data  = (await this.apiService.getAllPropiedades().toPromise()) as any;
    this.propiedades = data.body
    this.propiedadesTemp =data.body
  }

 

  vehiculoFormRegistro = new FormGroup({
    id_tipo_vehiculo: new FormControl('', [Validators.required]),
    id_estado: new FormControl('', [Validators.required]),
    marca: new FormControl('', [Validators.required]),
    submarca: new FormControl('', [Validators.required]),
    color: new FormControl('', [Validators.required]),
    placas: new FormControl('', [Validators.required]),
  });

  clickInputFile() {
    (document.querySelector('#inputFile') as HTMLInputElement).click();
  }

  /**
   * ? MOSTRAR VISTA PREVIA DE ARCHIVO
   * ? TARJETA DE CIRCULACION
   */
  previewFile() {
    window.open(this.pdfUrl, '_blank');
  }

  /**
   * ? SELECCIONA ARCHIVO AL SELECCIONAR INPUT FILE
   * ? ALMACENA EL ARCHIVO EN UNA VARIABLE DE TIPO FILE
   * ? Y OBTENGO UNA URL DEL ARCHIVO PARA VISUALIZARLO
   * ? EN EL NAVEGADOR
   */
  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e: any) => {
      this.pdfUrl = e.target.result;
    };
    reader.readAsDataURL(file);
  }

  /**
   * ? BUSCA PROPIEDAD PARA REGISTRAR EL VEHICULO
   * ? POR SU CLAVE CATASTRAL
   * ! FALTARIA PODER BUSCAR POR MAS ATRIBUTOS
   */
  /*
  searchPropiedad(clave: string) {
    this.apiService.searchClaveCatastral(clave).subscribe((data: any) => {
      if (data.body == '') {
        this.idPropiedad = undefined;
        this.idPropietario = undefined;
        Swal.fire({
          title: 'Propiedad no encontrada',
          icon: 'error',
        });
      } else {
        this.idPropiedad = String(data.body[0].id);
        this.idPropietario = String(data.body[0].propietario.id);

        Swal.fire({
          icon: 'info',
          html: `
          
          <h3>Propiedad:</h3>
          <h5>${data.body[0].descripcion}</h5>
          
          
          <h3 >Propietario:</h3>
          <h5>${data.body[0].propietario.nombre}</h5>
         
          `,
        });
      }
    });
  }*/
  // ? BUSCAR PROPIEDAD POR SU NOMBRE DE PROPIETARIO ,DESCRIPCION O CLAVE CATSTRAL
  searchPropiedad(search:any ,event:any){

    event.stopPropagation();
    //event.stopPropagation();
    //console.log(search)
    const matchingPropiedades = this.propiedadesTemp.filter(u => 
      u.claveCatastral.toLowerCase().includes(search.toLowerCase()) || 
      u.propietario.nombre.toLowerCase().includes(search.toLowerCase()) || 
      u.descripcion.toLowerCase().includes(search.toLowerCase())
    );
    //console.log(matchingUsers);

    this.propiedades = matchingPropiedades
  }
  // ? SELECCIONAR PRIPIEDAD DE MODAL 
  selectPropiedad(propiedad:any){
    this.idPropiedad = String(propiedad.id);
    this.idPropietario = String(propiedad.propietario.id);
    this.showModal = false
  }

  addVehiculo() {
    //VERIFICAR QUE SE ALLA SELECCIONADO LA PROPIEDAD
    //DONDE SE REGISTRARA EL VEHICULO
    if (this.idPropiedad) {
      //ALMACENAR LOS DATOS EN UN ARRAY DE OBJETOS QUE SE ENVIARAN A LA API
      var datos: any = {
        ...this.vehiculoFormRegistro.value,
        id_propiedad: this.idPropiedad,
        propietario_id: this.idPropietario,
        id_fraccionamiento: localStorage.getItem('id_fraccionamiento'),
      };
      //CREAR UN FORMDATA PARA AGREGAR LOS DATOS MAS EL ARCHIVO FILE
      //TARJETA DE CIRCULACION 
      const formData = new FormData();
      //SE RECORRE EL ARRAY DE LA DATA Y SE ALMACENA CADA UNO
      //EN EL FORMDATA
      Object.keys(datos).forEach((key) => formData.append(key, datos[key]));

      //VERIFICAR SI FILE TARJETA DE CIRCULACION FUE SELECCIONADO
      if (this.selectedFile) {
        formData.append('tarjeta_circulacion', this.selectedFile); //SE AGREGA AL FORMDATA
      }

      //SE HACE LA PETCION A LA API PARA REGISTRAR UN NUEVO VEHICULO
      this.apiService.addVehiculo(formData).subscribe(() => {
        this.vehiculoFormRegistro.reset(); //LIMPIO EL FORM
        this.router.navigate(['/dashboard/vehiculos/listado']); //REDIRECIONO A LISTAR VEHICULOS
      });
    } else {
      Swal.fire({
        title: 'Busque su propiedad',
        icon: 'info',
      });
    }
  }
}
