import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { INTERNAL_ROUTES } from 'src/app/data/constants/routes/internal.routes';
import { propiedad } from 'src/app/data/interfaces/propiedad';


@Component({
  selector: 'app-list-propiedades',
  templateUrl: './list-propiedades.component.html',
  styleUrls: ['./list-propiedades.component.css'],
})
export class ListPropiedadesComponent implements OnInit {
  @Input() propiedadesData!: propiedad[];
  form: any;
  currentPropiedad!: any;
  public regPropiedadRoute:any;
  constructor(private formBuilder: FormBuilder) {


    this.regPropiedadRoute =  INTERNAL_ROUTES.MODULO_REGPROPIEDAD;
  }

  ngOnInit(): void {}

  abrirModal(datos: any): any {
    //console.log('antes de');
    //console.log(datos);

    this.currentPropiedad = {
      id: datos.id,
      tipoPropiedad: datos.tipoPropiedad,
      claveCatastral: datos.claveCatastral,
      descripcion: datos.descripcion,
      superficie: datos.superficie,
      balance: datos.balance,
      predialUrl: datos.predialUrl,
      estatus: datos.estatus,
      propietario: datos.propietario,
      lote: datos.lote,
      inquilino: datos.inquilino,
      fraccionamientoId: datos.fraccionamientoId,
    };

    console.log(this.currentPropiedad);
    
    // console.log(this.currentPropiedad.inquilino );
    setTimeout(() => {
      var divModl = document.getElementById('id01') as HTMLDivElement;
      divModl.style.display = 'block';
    }, 100);
  }

  closeModal() {
    const modal = document.getElementById('id01');
    if (modal) {
      modal.style.display = 'none';
    }
    this.currentPropiedad = null;
  }

  addPropiedadModal(){
    setTimeout(() => {
      var divModl2 = document.getElementById('id02') as HTMLDivElement;
      divModl2.style.display = 'block';
    }, 100);
  }

  envModal2() {
    var divModl2 = document.getElementById('id02') as HTMLDivElement;
    divModl2.style.display = 'none';
  }

  envModal() {
    var divModl = document.getElementById('id01') as HTMLDivElement;
    divModl.style.display = 'none';
  }
}
