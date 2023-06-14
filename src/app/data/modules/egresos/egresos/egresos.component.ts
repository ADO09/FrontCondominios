import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EgresosService } from 'src/app/data/services/api/egresos/egresos.service';
import { SharedTitleComponentService } from 'src/app/data/services/shared-title-component.service';
import { Egreso } from 'src/app/data/interfaces/egresos'
import { Route, Router } from '@angular/router';
import { INTERNAL_ROUTES } from 'src/app/data/constants/routes/internal.routes';
import { animacionSearch } from '../../../../shared/exports/animacionInputSearch';
import { ProveedoresService } from 'src/app/data/services/api/proveedores/proveedores.service';
import { EventEmitter, Output } from '@angular/core';
import { UpdateDataService } from 'src/app/data/services/update-data.service';

@Component({
  selector: 'app-egresos',
  templateUrl: './egresos.component.html',
  styleUrls: ['./egresos.component.css']
})
export class EgresosComponent implements OnInit {

  showModal = false
  showModalP = false
  productoTemp: any[] = []
  tipoEgresos: any[] = []
 
  idTipoEgreso: string | undefined;
  public FormTipoEgreso!: FormGroup;
  proveedores: any[] = []
  public JSONDATOSTIPOEGRESO: any;
  idProveedor: string | undefined;
  correoProveedor: string | undefined;
  public proveedorSelect: any | null = null;
  //-------------------------------
  listaEgresosTemp: any[] = []
  


  selectValueTipoEgreso: string = "0"

  // correoProveedor: string | undefined;
  public tipoEgresoSelect: any | null = null;
  public tipoEgresoSelected: any[] = []
  page!: number;
  listaEgresos: any[] = [];
  fraccionamientoId: any;
  public EgresoSelect!: Egreso;
  public FormEgresos!: FormGroup;
  public ModuloGestionEgreso: any = INTERNAL_ROUTES.MODULO_GESTIONEGRESO;
  constructor(private proveedoresService: ProveedoresService, private apiService: EgresosService, private sharedTitleService: SharedTitleComponentService, private formBuilder: FormBuilder, private route: Router,private updateDService:UpdateDataService) {
    this.fraccionamientoId = localStorage.getItem('id_fraccionamiento');


    updateDService.changeEmitted$.subscribe((data) => {
   this.tipoEgresoListUpdate();
    });
    sharedTitleService.emitChange("Lista de egresos")

    this.FormTipoEgreso = this.formBuilder.group({
      descripcion: ['', Validators.required],
      proveedor: ['', Validators.required]
    });

    
  }


  async tipoEgresoListUpdate(){
    var data = (await this.apiService.getTipoEgresoQPFraccionamiento(this.fraccionamientoId).toPromise()) as any;
    this.tipoEgresos = data.body
    this.tipoEgresoSelected = data.body;
  }

  async ngOnInit() {

    var data = (await this.apiService.getTipoEgresoQPFraccionamiento(this.fraccionamientoId).toPromise()) as any;
    var dataP = (await this.proveedoresService.getAll().toPromise()) as any;
    this.proveedores = dataP.body

    this.tipoEgresos = data.body
    this.tipoEgresoSelected = data.body;
    console.log(this.tipoEgresos);

    this.FormEgresos = this.formBuilder.group({
      // id: ['', Validators.required],
      // fraccionamientoId: ['', Validators.required],
      descripcion: ['', Validators.required],
      comprobanteUrl: [''],
      montoTotal: ['', Validators.required],
      isVerified: ['', Validators.required],
      tipoEgreso: ['', Validators.required],
      estatusEgreso: ['', Validators.required],
      // detalleEgreso: ['', Validators.required]
    });
    this.apiService.getEgresos(this.fraccionamientoId).subscribe((recibos: any) => {
      console.log(recibos);

      this.listaEgresos = recibos.body;
      this.listaEgresosTemp = recibos.body;
      console.log(this.listaEgresos);
    });


  }

  selectProveedor(proveedor: any) {




    this.idProveedor = String(proveedor.id);


    this.correoProveedor = String(proveedor.correoContacto);

    this.proveedorSelect = proveedor;
    console.log(this.proveedorSelect?.correoContacto);
    this.FormTipoEgreso.patchValue({
      proveedor: [
        this.proveedorSelect?.correoContacto
      ],
    });

    // this.formData.append('productoId', producto.id);

    this.JSONDATOSTIPOEGRESO = { ...this.JSONDATOSTIPOEGRESO, proveedorId: proveedor.id };

    this.showModalP = false


  }

  enviarModalTE() {
    this.JSONDATOSTIPOEGRESO = {
      ...this.JSONDATOSTIPOEGRESO,
      descripcion: this.FormTipoEgreso.value.descripcion,
      status: 1,
      fraccionamientoId: localStorage.getItem('id_fraccionamiento')
    }

    this.apiService.postTipoEgreso(this.JSONDATOSTIPOEGRESO).subscribe((r) => {
      console.log(r);

      if (r.icon == "success") {
        this.actTipoEgresos();
      }
    });
  }


  async actTipoEgresos(){
    var data = (await this.apiService.getTipoEgresoQPFraccionamiento(this.fraccionamientoId).toPromise()) as any;
    this.tipoEgresos = data.body;
  }
  cerrarModal() {

    var divModl = document.getElementById('id01') as HTMLDivElement;
    divModl.style.display = 'none';

  }


  //  ngOnChanges() {
  //   this.FormEgresos = this.formBuilder.group({
  //     // id: ['', Validators.required],
  //     // fraccionamientoId: ['', Validators.required],
  //     descripcion: ['', Validators.required],
  //     comprobanteUrl: ['', Validators.required],
  //     montoTotal: ['', Validators.required],
  //     isVerified: ['', Validators.required],
  //     tipoEgreso:['', Validators.required] ,
  //     estatusEgreso:['', Validators.required] ,
  //     // detalleEgreso: ['', Validators.required]
  //   });
  //  }

  enviarModal() {

  }


  GestionEgreso(egreso: any) {
    // setTimeout(() => {
    //   var divModl = document.getElementById('id01') as HTMLDivElement;
    //   divModl.style.display = 'block';
    // }, 100);




  }




  searchTipoEgfreso(search: any, event: any) {

    event.stopPropagation();
    //event.stopPropagation();
    //console.log(search)
    const matchingProducto = this.productoTemp.filter(u =>
      u.descripcion.toLowerCase().includes(search.toLowerCase()) ||
      u.cantidad.toLowerCase().includes(search.toLowerCase()) ||
      u.precio_unitario.toLowerCase().includes(search.toLowerCase())
    );
    //console.log(matchingUsers);

    this.tipoEgresos = matchingProducto
  }

  envModal() {

    var divModl = document.getElementById('id01') as HTMLDivElement;
    divModl.style.display = 'none';

  }

  selectTipoEgreso(tipoEgreso: any) {

    this.idTipoEgreso = String(tipoEgreso.id);

    // console.log(proveedor.id);

    // this.correoProveedor = String(proveedor.correoContacto);

    this.tipoEgresoSelect = tipoEgreso;
    // console.log(this.proveedorSelect?.correoContacto);
    // this.FormEgresos.patchValue({
    //   proveedorId: [
    //     this.proveedorSelect?.correoContacto 
    //   ],
    // });
    setTimeout(() => {
      var divModl = document.getElementById('id01') as HTMLDivElement;
      divModl.style.display = 'block';
    }, 100);
    // this.formData.append('productoId', producto.id);

    // this.formData.append('proveedorId', proveedor.id);
    this.showModal = false


  }

  cambiarEstatus(idEgreso: any) {
    const payload: any[] = [

    ]

    this.apiService.cambiarEstatus(this.fraccionamientoId, idEgreso, payload).subscribe((recibos: any) => {
      this.listaEgresos = recibos.body;

      console.log(this.listaEgresos);
    });

  }













  onSelectChangeTipoEgreso(event: Event) {
    const selectedValue = (event.target as HTMLSelectElement).value;
    this.selectValueTipoEgreso = selectedValue
    console.log('Valor seleccionado:', selectedValue);

    this.getAllFilters()


  }


  //  onSelectChangePropiedad(event:Event){
  //   const selectedValue = (event.target as HTMLSelectElement).value;
  //   this.selectValuePropiedad = selectedValue
  //   console.log('Valor seleccionado:', selectedValue);

  //   this.getAllFilters()
  //  }

  getAllFilters() {
    let valuesSelectTipoEgreso = '';
    if (this.selectValueTipoEgreso != '-1') valuesSelectTipoEgreso = this.selectValueTipoEgreso



    this.apiService.getAllFiltersTipoEgreso(valuesSelectTipoEgreso, this.fraccionamientoId).subscribe((data: any) => {

      this.listaEgresos = data.body
      this.listaEgresosTemp = data.body
    })
  }

  animacionSearch() {

    animacionSearch.animacionSearch()
    /*
    const containerSearch = document.querySelector('.container-search') as HTMLInputElement
    containerSearch.style.width = '100%'
    const cerrarInputSearch = document.querySelector('.cerrarInputSearch') as HTMLAnchorElement
    cerrarInputSearch.style.display = "block"

    const inputSearch = document.querySelector('#inputSearch')  as HTMLInputElement
    inputSearch.style.width = '100%';
    inputSearch.style.borderBottomColor = 'var(--ColorSecundario)'

    
      const containerFiltros = document.querySelectorAll('.filtro')

      containerFiltros.forEach((element) => {
        if (element instanceof HTMLElement) {
          element.style.display = 'none';
        }
      });*/
  }

  cerrarAnimacioneSearch() {
    animacionSearch.cerrarAnimacioneSearch()
    animacionSearch.executeAfterTimeout()
    /*
    const cerrarInputSearch = document.querySelector('.cerrarInputSearch') as HTMLAnchorElement
    cerrarInputSearch.style.display = "none"
    const containerSearch = document.querySelector('.container-search') as HTMLInputElement
    containerSearch.style.width = 'auto'

    const inputSearch = document.querySelector('#inputSearch')  as HTMLInputElement
    inputSearch.style.width = '0';
    inputSearch.style.borderBottomColor = 'var(--ColorPrincipal)'

    this.executeAfterTimeout()
     */

  }

  /*
  executeAfterTimeout() {
   setTimeout(() => {
     // Tu lógica aquí
     const containerFiltros = document.querySelectorAll('.filtro')

     containerFiltros.forEach((element) => {
       if (element instanceof HTMLElement) {
         element.style.display = 'flex';
       }
     });
   }, 300); // 2000 ms = 2 segundos
 }*/

  searchEgreso(search: any, event: any) {
    const matchingPropiedades = this.listaEgresosTemp.filter((u: any) =>
      u.descripcion.toLowerCase().includes(search.toLowerCase()) ||
      u.proveedor.correoContacto.toLowerCase().includes(search.toLowerCase()));
    //console.log(matchingUsers);

    this.listaEgresos = matchingPropiedades
  }

}
