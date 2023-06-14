import { Component } from '@angular/core';
import { IngresosService } from 'src/app/data/services/api/ingresos/ingresos.service';
import { SharedTitleComponentService } from 'src/app/data/services/shared-title-component.service';
import { INTERNAL_ROUTES } from 'src/app/data/constants/routes/internal.routes';
import { animacionSearch } from 'src/app/shared/exports/animacionInputSearch';
import { UpdateDataService } from 'src/app/data/services/update-data.service';

@Component({
  selector: 'app-cuotas-ingresos-conf',
  templateUrl: './cuotas-ingresos-conf.component.html',
  styleUrls: ['./cuotas-ingresos-conf.component.css'],
})
export class CuotasIngresosConfComponent {
  //aqui
  selectValueTipoPago: string = '0'; //aqui

  //aqui los temporales de busqueda
  TipoPagoTemp: any[] = [];

  public ingresosTemp!: any[];
  public idFraccionamientoUsuer: any;
  public regConfPagoRoute: any;
  constructor(
    private ingresosService: IngresosService,
    private sharedTitleService: SharedTitleComponentService,
    private updateDService:UpdateDataService
  ) {
    this.regConfPagoRoute = INTERNAL_ROUTES.MODULO_REGCONFPAGO;
    sharedTitleService.emitChange('Gestion de Configuracion de Pagos');
    updateDService.changeEmitted$.subscribe((data) => {
      this.ingresosService
      .IngresosPagosConfGetAll(this.idFraccionamientoUsuer)
      .subscribe((r) => {
        this.ingresosData = r.body;
        this.ingresosTemp = r.body;
      
      });
       });
  }

  public ingresosData!: any[];
  ngOnInit(): void {
    this.idFraccionamientoUsuer = localStorage.getItem('id_fraccionamiento');
    this.ingresosService
      .IngresosPagosConfGetAll(this.idFraccionamientoUsuer)
      .subscribe((r) => {
        this.ingresosData = r.body;
        this.ingresosTemp = r.body;
        console.log(r);
        console.log(this.ingresosData);
      });
  }

  onSelectChangeTipoPago(event: Event) {
    const selectedValue = (event.target as HTMLSelectElement).value;
    this.selectValueTipoPago = selectedValue;
    console.log('Valor seleccionado:', selectedValue);

    this.getAllFilters();
  }

  getAllFilters() {
    let valueSelectTipoPago = '';

    if (this.selectValueTipoPago != '-1')
      valueSelectTipoPago = this.selectValueTipoPago;

    this.ingresosService
      .getAllFilters(this.idFraccionamientoUsuer, valueSelectTipoPago)
      .subscribe((data: any) => {
        this.ingresosData = data.body;
        this.TipoPagoTemp = data.body;
        console.log(this.TipoPagoTemp);
      });
  }

  animacionSearch() {
    animacionSearch.animacionSearch();
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
    animacionSearch.cerrarAnimacioneSearch();
    animacionSearch.executeAfterTimeout();
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

  searchConfIngreso(search: any, event: any) {
    if (this.TipoPagoTemp.length != 0) {
      console.log(this.TipoPagoTemp.length);
      console.log('no hay');

      const matchingPropiedades = this.TipoPagoTemp.filter(
        (u: any) =>
          u.descripcion.toLowerCase().includes(search.toLowerCase()) ||
          u.periodo.toLowerCase().includes(search.toLowerCase())
      );
      this.ingresosData = matchingPropiedades;
    } else {
      console.log('si hay');

      const matchingPropiedades = this.ingresosTemp.filter(
        (u: any) =>
          u.descripcion.toLowerCase().includes(search.toLowerCase()) ||
          u.periodo.toLowerCase().includes(search.toLowerCase())
      );
      this.ingresosData = matchingPropiedades;
    }

    //console.log(matchingUsers);
  }
}
