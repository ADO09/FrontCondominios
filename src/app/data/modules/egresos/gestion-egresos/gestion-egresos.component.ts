import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Egreso } from 'src/app/data/interfaces/egresos';
import { EgresosService } from 'src/app/data/services/api/egresos/egresos.service';
import { ProveedoresService } from 'src/app/data/services/api/proveedores/proveedores.service';
import { UpdateDataService } from 'src/app/data/services/update-data.service';
import { enviroment as ENV } from 'src/environments/enviroments.dev';

@Component({
  selector: 'app-gestion-egresos',
  templateUrl: './gestion-egresos.component.html',
  styleUrls: ['./gestion-egresos.component.css'],
})
export class GestionEgresosComponent {
  public FormEgresos: any;
  public egresoData!: any;
  public id: any;
  public tiposEgresos!: any;
  public formData = new FormData();
  public selectedFile: File | undefined;
  public pdfUrl: any;
  public api = ENV.urlAPI;
  showModal = false;
  productoTemp: any[] = [];
  proveedores: any[] = [];
  idProveedor: string | undefined;
  correoProveedor: string | undefined;
  public proveedorSelect: any | null = null;
  listaEgresos: any;

  constructor(
    private proveedoresService: ProveedoresService,
    private route: ActivatedRoute,
    private egresosService: EgresosService,
    private formBuilder: FormBuilder,
    private router: Router,
    private updateDService:UpdateDataService
  ) {
    updateDService.changeEmitted$.subscribe((data) => {
      // this.tipoEgresoListUpdate();
      this.egresosService.getOneEgreso(this.id).subscribe((r) => {
        this.egresoData = r.body;
      });
    });
    this.id = +this.route.snapshot.params['id_egreso'];
    console.log(this.id);
    this.FormEgresos = this.formBuilder.group({
      // id: ['', Validators.required],
      // fraccionamientoId: ['', Validators.required],
      descripcion: ['', Validators.required],
      comprobanteUrl: [, Validators.required],
      montoTotal: ['', Validators.required],
      isVerified: ['', Validators.required],
      tipoEgreso: ['', Validators.required],
      estatusEgreso: ['', Validators.required],
      tipoPago: ['', Validators.required],
      fechaPago: ['', Validators.required],
      proveedorId: ['', Validators.required],
      // TipoEgresoEstatus:['', Validators.required]
      // detalleEgreso: ['', Validators.required]
    });
  }

  async ngOnInit() {
    var data = (await this.proveedoresService.getAll().toPromise()) as any;
    this.proveedores = data.body;

    this.egresosService.getOneEgreso(this.id).subscribe((r) => {
      this.egresoData = r.body;
      console.log(this.egresoData);

      this.egresosService
        .getTipoEgresoQPFraccionamiento(
          localStorage.getItem('id_fraccionamiento')
        )
        .subscribe((res) => {
          this.tiposEgresos = res.body;

          console.log(this.tiposEgresos);

          this.FormEgresos = this.formBuilder.group({
            descripcion: [this.egresoData.descripcion, Validators.required],
            comprobanteUrl: [''],
            montoTotal: [this.egresoData.montoTotal, Validators.required],
            isVerified: [this.egresoData.isVerified, Validators.required],
            tipoEgreso: [this.egresoData.tipoEgreso.id, Validators.required],
            estatusEgreso: [
              this.egresoData.estatusEgreso.id,
              Validators.required,
            ],
            tipoPago: [this.egresoData.tipoPago, Validators.required],
            fechaPago: [this.egresoData.fechaPago, Validators.required],
            proveedorId: [
              this.egresoData.proveedor.correoContacto,
              Validators.required,
            ],
            // TipoEgresoEstatus:[this.egresoData.tipoEgreso.status, Validators.required]
          });
        });

      console.log(this.egresoData.detalleEgreso);
    });
  }

  fraccionamientoId(fraccionamientoId: any) {
    throw new Error('Method not implemented.');
  }

  enviarModal() {
    console.log(this.FormEgresos.value);

    var TipoEgreso: any = this.FormEgresos.value.tipoEgreso;

    var fraccionamientoId: any = localStorage.getItem('id_fraccionamiento');
    this.formData.append('descripcion', this.FormEgresos.value.descripcion);
    this.formData.append(
      'comprobanteUrl',
      this.FormEgresos.value.comprobanteUrl
    );
    this.formData.append('montoTotal', this.FormEgresos.value.montoTotal);
    this.formData.append('isVerified', this.FormEgresos.value.isVerified);
    this.formData.append('tipoEgreso', TipoEgreso);
    // this.formData.append('estatusEgreso', this.FormEgresos.value.estatusEgreso);
    this.formData.append(
      'estatusEgresoId',
      this.FormEgresos.value.estatusEgreso
    );
    this.formData.append('fraccionamientoId', fraccionamientoId);
    this.formData.append('fechaPago', this.FormEgresos.value.fechaPago);
    this.formData.append('tipoPago', this.FormEgresos.value.tipoPago);

    this.egresosService
      .updateEgreso(this.egresoData.id, this.formData)
      .subscribe((r) => {
        console.log(r);

        if (r.icon == 'success') {
          this.router.navigateByUrl('/dashboard/egresos');
        }
      });
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
    this.FormEgresos.value.comprobanteUrl = event.target.files[0];

    const file = event.target.files[0];
    this.formData.append('archivoComprobante', file);
    const reader = new FileReader();
    reader.onload = (e: any) => {
      this.pdfUrl = e.target.result;
    };
    reader.readAsDataURL(file);
  }
  clickInputFile() {
    (document.querySelector('#inputFile') as HTMLInputElement).click();
  }

  previewFile() {}

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
    console.log('2');

    this.idProveedor = String(proveedor.id);

    console.log(proveedor.id);

    this.correoProveedor = String(proveedor.correoContacto);

    this.proveedorSelect = proveedor;
    console.log(this.proveedorSelect?.correoContacto);
    this.FormEgresos.patchValue({
      proveedorId: [this.proveedorSelect?.correoContacto],
    });

    // this.formData.append('productoId', producto.id);

    this.formData.append('proveedorId', proveedor.id);
    this.showModal = false;
  }

  tipoEgresoSeleccionado(select: any) {
    const selectedIndex = select.selectedIndex;
    const selectedObject: any = this.tiposEgresos[selectedIndex];
    console.log(selectedObject.proveedorDefault);

    if (selectedObject.proveedorDefault) {
      console.log('aisudhashudiu');

      this.idProveedor = String(selectedObject.proveedorDefault.id);

      console.log(selectedObject.proveedorDefault.id);

      this.correoProveedor = String(
        selectedObject.proveedorDefault.correoContacto
      );

      this.proveedorSelect = selectedObject.proveedorDefault;
      console.log(this.proveedorSelect?.correoContacto);
      this.FormEgresos.patchValue({
        proveedorId: [this.proveedorSelect?.correoContacto],
      });

      // this.formData.append('productoId', producto.id);

      this.formData.append('proveedorId', selectedObject.proveedorDefault.id);
      // this.showModal = false
    } else {
      //console.log(this.proveedorSelect?.correoContacto);
      this.idProveedor = String(this.egresoData.proveedor.id);

      console.log(this.egresoData.proveedor.id);

      this.correoProveedor = String(this.egresoData.proveedor.correoContacto);

      this.proveedorSelect = this.egresoData.proveedor;
      console.log(this.proveedorSelect?.correoContacto);
      this.FormEgresos.patchValue({
        proveedorId: [this.proveedorSelect?.correoContacto],
      });

      // this.formData.append('productoId', producto.id);

      this.formData.append('proveedorId', this.egresoData.proveedor.id);
      //this.showModal = false
    }
  }
}
