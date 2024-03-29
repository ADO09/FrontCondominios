import { DatePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IngresosService } from 'src/app/data/services/api/ingresos/ingresos.service';
import { ProductosService } from 'src/app/data/services/api/productos/productos.service';
import { ProveedoresService } from 'src/app/data/services/api/proveedores/proveedores.service';
import { UpdateDataService } from 'src/app/data/services/update-data.service';

@Component({
  selector: 'app-modal-reg-producto',
  templateUrl: './modal-reg-producto.component.html',
  styleUrls: ['./modal-reg-producto.component.css'],
})
export class ModalRegProductoComponent {
  @Input() cerrarModal: any;
  @Input() productoDatos!: any;

  public datos: any = {};
  showModal = false;
  productoTemp: any[] = [];
  proveedores: any[] = [];
  idProveedor: string | undefined;
  correoProveedor: string | undefined;
  public proveedorSelect: any | null = null;

  // public inquilinoSelect: confPagos  |null = null;
  public formProducto!: FormGroup;
  public idFraccionamientoUsuer: any;
  constructor(
    private fb: FormBuilder,
    private datePipe: DatePipe,
    private ingresosService: IngresosService,
    private proveedoresService: ProveedoresService,
    private productosService: ProductosService,
    private updateDService:UpdateDataService
  ) {
    this.formProducto = this.fb.group({
      // id: ['', Validators.required],
      // id_fraccionamiento: ['', Validators.required],
      descripcion: ['', Validators.required],
      //  fraccionamiento_id: ['', Validators.required],
      identificador_interno: ['', Validators.required],
      proveedor_id: ['', Validators.required],
    });
  }

  async ngOnInit() {
    var data = (await this.proveedoresService.getAll().toPromise()) as any;
    this.proveedores = data.body;

    console.log(this.proveedores);

    this.idFraccionamientoUsuer = localStorage.getItem('id_fraccionamiento');
    console.log(this.productoDatos);
  }

  // ngOnChanges() {

  //   if (this.productoDatos) {
  //     this.formProducto = this.fb.group({

  //       descripcion: [this.productoDatos.descripcion, Validators.required],
  //       // fraccionamiento_id: ['', Validators.required],
  //       identificador_interno: [this.productoDatos.identificadorInterno, Validators.required],
  //       proveedor_id: [this.productoDatos.proveedor.correoContacto, Validators.required],
  //     });
  //   }

  // }

  onSubmit() {}

  enviarModal() {
    // console.log(this.formProducto.value);

    let formData = this.formProducto.value;

    this.datos = {
      ...this.datos,
      descripcion: formData.descripcion,
      identificadorInterno: formData.identificador_interno,
      // proveedorId:formData.proveedor_id,
      fraccionamientoId: this.idFraccionamientoUsuer,
    };

    this.productosService.AddProducto(this.datos).subscribe((r) => {
      console.log(r);

      if (r.icon == 'success') {
        this.updateDService.emitChange('hola');
        this.formProducto.reset();
        this.cerrarModal();
      }
    });
  }

  searchProveedor(search: any, event: any) {
    event.stopPropagation();
    //event.stopPropagation();
    //console.log(search)
    const matchingProducto = this.productoTemp.filter(
      (u) =>
        u.descripcion.toLowerCase().includes(search.toLowerCase()) ||
        u.cantidad.toLowerCase().includes(search.toLowerCase()) ||
        u.precio_unitario.toLowerCase().includes(search.toLowerCase())
    );
    //console.log(matchingUsers);

    this.proveedores = matchingProducto;
  }

  selectProveedor(proveedor: any) {
    this.idProveedor = String(proveedor.id);

    console.log(proveedor.id);

    this.correoProveedor = String(proveedor.correoContacto);

    this.proveedorSelect = proveedor;
    console.log(this.proveedorSelect?.correoContacto);
    this.formProducto.patchValue({
      proveedor_id: [this.proveedorSelect?.correoContacto],
    });

    // this.formData.append('productoId', producto.id);

    this.datos = { ...this.datos, proveedorId: proveedor.id };

    this.showModal = false;
  }
}
