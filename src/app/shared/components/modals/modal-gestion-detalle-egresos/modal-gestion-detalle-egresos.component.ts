import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { EgresosService } from 'src/app/data/services/api/egresos/egresos.service';
import { ProductosService } from 'src/app/data/services/api/productos/productos.service';

@Component({
  selector: 'app-modal-gestion-detalle-egresos',
  templateUrl: './modal-gestion-detalle-egresos.component.html',
  styleUrls: ['./modal-gestion-detalle-egresos.component.css']
})
export class ModalGestionDetalleEgresosComponent {
  public FormDetalleEgresos!: FormGroup;

  @Input() cerrarModal: any;
  @Input() detalleEgresoDatos!: any;
 
  showModal = false
  productoTemp:any[]=[]
  productos:any[]=[]
  idProducto: string | undefined;
  descripcionProducto: string | undefined;
  public productoSelect: any | null = null;
  public JSONEGRS:any;
  
  public productoData!: any[];
 
  public formData = new FormData();


public id:any;
  
constructor(private fb: FormBuilder,private productoService:ProductosService,private egresoSrvice:EgresosService,private route:ActivatedRoute) {
  this.id = +this.route.snapshot.params['id_egreso'];
  console.log(this.id);
  
}
 
   async ngOnInit(){
    var data  = (await this.productoService.GetProductosQPFraccionamiento(localStorage.getItem('id_fraccionamiento')).toPromise()) as any;
    this.productos = data.body

    console.log(this.productos);
    
    this.productoTemp =data.body
    if (!this.detalleEgresoDatos) {
      this.FormDetalleEgresos = this.fb.group({
        cantidad: ['', Validators.required],
        descripcion: ['', Validators.required],
        precio_unitario: ['', Validators.required],
        producto: ['', Validators.required]
      });
    }
  }

 
  searchPropiedad(search:any ,event:any){

    event.stopPropagation();
    //event.stopPropagation();
    //console.log(search)
    const matchingProducto = this.productoTemp.filter(u => 
      u.descripcion.toLowerCase().includes(search.toLowerCase()) || 
      u.cantidad.toLowerCase().includes(search.toLowerCase()) || 
      u.precio_unitario.toLowerCase().includes(search.toLowerCase())
    );
    //console.log(matchingUsers);

    this.productos = matchingProducto
  }

  selectProducto(producto:any){
    this.idProducto = String(producto.id);

    console.log(producto.id);
    
    this.descripcionProducto = String(producto.descripcion);

    this.productoSelect = producto;
    console.log(this.productoSelect?.descripcion);
    this.FormDetalleEgresos.patchValue({
      producto: [
        this.productoSelect?.descripcion 
      ],
    });

    this.formData.append('productoId', producto.id);

    this.JSONEGRS = { ...this.JSONEGRS, productoId:  this.formData.get('productoId') };

    this.showModal = false
  }
  ngOnChanges() {

    if (this.detalleEgresoDatos) {
      this.FormDetalleEgresos = this.fb.group({
        cantidad: [this.detalleEgresoDatos.cantidad, Validators.required],
        descripcion: [this.detalleEgresoDatos.descripcion, Validators.required],
        precio_unitario: [this.detalleEgresoDatos.precio_unitario, Validators.required],
        producto: [this.detalleEgresoDatos.producto.descripcion, Validators.required]
      });
    }
  }

 

  
  abrModalProducto() {
    setTimeout(() => {
      var divModlp = document.getElementById('id0P') as HTMLDivElement;
      divModlp.style.display = 'block';
    }, 100);
  }



  handleClearInput2() {
    this.productoSelect = null;
    this.FormDetalleEgresos.patchValue({
      producto: null,
    });
    // this.formPropiedades.get('propietarioId')?.setValidators([Validators.required]);
    // this.formPropiedades.get('propietarioId')?.updateValueAndValidity();

    //this.formData.append('propietarioId', '');
    console.log(this.FormDetalleEgresos.valid);
  }
  enviarModal(){

  console.log(this.FormDetalleEgresos.value);
  
  var frccId:any = localStorage.getItem('id_fraccionamiento');


 
  this.formData.append('cantidad',this.FormDetalleEgresos.value.cantidad);
  this.formData.append('descripcion',this.FormDetalleEgresos.value.descripcion);
  this.formData.append('precioUnitario',this.FormDetalleEgresos.value.precio_unitario);
  this.formData.append('fraccionamientoId',frccId);
  this.formData.append('egresoId',this.id);
 

  console.log(this.formData.get('egresoId'));
  console.log(this.formData.get('productoId'));
  

  this.JSONEGRS = {
    ...this.JSONEGRS,
    cantidad: this.formData.get('cantidad'),
    descripcion: this.formData.get('descripcion'),
    precioUnitario:this.formData.get('precioUnitario'),
    fraccionamientoId: this.formData.get('fraccionamientoId'),
    egresoId: this.formData.get('egresoId')
  }

  
  this.egresoSrvice.updateDetalleEgreso(this.id,this.detalleEgresoDatos.producto.id,this.JSONEGRS).subscribe( (r)=>{
    console.log(r);
    
  })
  }

  // manejarDatoP(dato: any) {
  //   this.productoSelect = dato;
  //   console.log(this.productoSelect?.nombre);
  //   this.FormDetalleEgresos.patchValue({
  //     producto: [
  //       this.productoSelect?.descripcion +
  //         ' ' +
  //         this.productoSelect?.identificador_interno,
  //     ],
  //   });

  //   this.formData.append('producto', dato.id);
  // }
  // envModalP() {
  //   var divModlP = document.getElementById('id0P') as HTMLDivElement;
  //   divModlP.style.display = 'none';
  // }
}
