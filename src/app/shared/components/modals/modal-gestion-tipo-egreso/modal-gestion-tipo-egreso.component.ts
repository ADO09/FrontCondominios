import { DatePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EgresosService } from 'src/app/data/services/api/egresos/egresos.service';
import { IngresosService } from 'src/app/data/services/api/ingresos/ingresos.service';
import { ProductosService } from 'src/app/data/services/api/productos/productos.service';
import { ProveedoresService } from 'src/app/data/services/api/proveedores/proveedores.service';

@Component({
  selector: 'app-modal-gestion-tipo-egreso',
  templateUrl: './modal-gestion-tipo-egreso.component.html',
  styleUrls: ['./modal-gestion-tipo-egreso.component.css']
})
export class ModalGestionTipoEgresoComponent {
  @Input() cerrarModal: any;
  @Input() tipoDeEgresosDatos!: any;

  public datos:any = {}
  public FormTipoEgreso!:FormGroup;
  showModal = false
  productoTemp:any[]=[]
  proveedores:any[]=[]
  idProveedor: string | undefined;
  correoProveedor: string | undefined;
  public proveedorSelect: any | null = null;
  public FormElejido!:any;
  public JSONDATOSTIPOEGRESO:any;
 
  // public inquilinoSelect: confPagos  |null = null;
 public formTipoEgreso!: FormGroup;
 public idFraccionamientoUsuer: any;
  constructor(private fb: FormBuilder,private datePipe: DatePipe,private ingresosService:IngresosService,private proveedoresService:ProveedoresService,private productosService:ProductosService,private egrespsService:EgresosService,private formBuilder:FormBuilder) {

    this.FormTipoEgreso = this.formBuilder.group({
      descripcion: ['', Validators.required],
      proveedor:['',Validators.required]
    });

   }

  async ngOnInit() {
    var data  = (await this.proveedoresService.getAll().toPromise()) as any;
    this.proveedores = data.body

    console.log(this.proveedores);
    
    this.idFraccionamientoUsuer = localStorage.getItem('id_fraccionamiento');
    console.log(this.tipoDeEgresosDatos);
    
    if (!this.tipoDeEgresosDatos) {
      this.formTipoEgreso = this.fb.group({
        // id: ['', Validators.required],
       // id_fraccionamiento: ['', Validators.required],
       descripcion: ['', Validators.required],
      //  fraccionamiento_id: ['', Validators.required],
       status: ['', Validators.required],
       proveedor_id: ['', Validators.required],
      });
    }
 
  }

  ngOnChanges() {

    var prov:any;
    if (this.tipoDeEgresosDatos.proveedorDefault) {
      prov = this.tipoDeEgresosDatos.proveedorDefault.correoContacto;
    } else {
      prov = 'no asignado';
    }

    if (this.tipoDeEgresosDatos) {
      this.formTipoEgreso = this.fb.group({

        descripcion: [this.tipoDeEgresosDatos.descripcion, Validators.required],
        // fraccionamiento_id: ['', Validators.required],
        status: [this.tipoDeEgresosDatos.status, Validators.required],
        proveedor_id: [prov, Validators.required],
      });
    }

  }

  onSubmit() {
    
  }
  
  enviarModal() {
    // console.log(this.formProducto.value);

    let formData = this.formTipoEgreso.value;
  
    this.datos = {
      ...this.datos,
      descripcion:formData.descripcion,
      status:formData.status,
      // proveedorId:formData.proveedor_id,
      fraccionamientoId:this.idFraccionamientoUsuer
    };

    if (!this.datos.proveedorId) {
      this.datos.proveedorId = this.tipoDeEgresosDatos.proveedorDefault.id;
    }

    

this.egrespsService.PutTipoEgreso(this.tipoDeEgresosDatos.id,this.datos).subscribe( (r)=>{
console.log(r);

})

 }

//  enviarModalTE(){
//   this.JSONDATOSTIPOEGRESO = {
//    ...this.JSONDATOSTIPOEGRESO,
//    descripcion:this.FormTipoEgreso.value.descripcion,
//    status:1,
//    fraccionamientoId:localStorage.getItem('id_fraccionamiento')
//  }

//  this.egresosService.postTipoEgreso(this.JSONDATOSTIPOEGRESO).subscribe((r) =>{
//    console.log(r);
   
//  });
// }
  searchProveedor(search:any ,event:any){

    event.stopPropagation();
    //event.stopPropagation();
    //console.log(search)
    const matchingProducto = this.productoTemp.filter(u => 
      u.descripcion.toLowerCase().includes(search.toLowerCase()) || 
      u.cantidad.toLowerCase().includes(search.toLowerCase()) || 
      u.precio_unitario.toLowerCase().includes(search.toLowerCase())
    );
    //console.log(matchingUsers);

    this.proveedores = matchingProducto
  }

  selectProveedor(proveedor:any){
    this.idProveedor = String(proveedor.id);

    console.log(proveedor.id);
    
    this.correoProveedor = String(proveedor.correoContacto);

    this.proveedorSelect = proveedor;
    console.log(this.proveedorSelect?.correoContacto);
    this.formTipoEgreso.patchValue({
      proveedor_id: [
        this.proveedorSelect?.correoContacto 
      ],
    });

    // this.formData.append('productoId', producto.id);

    this.datos = { ...this.datos, proveedorId:  proveedor.id };

    this.showModal = false
  }
}
