import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedTitleComponentService } from '../../services/shared-title-component.service';
import { INTERNAL_ROUTES } from '../../constants/routes/internal.routes';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  tituloComponente!: string;
  
  menuDesplegado: Boolean = false;

  correo?:string
  rol?:string

  idEmpleado:string = ''
  public propiedadesRoute:any = INTERNAL_ROUTES.MODULO_PROPPRINC;
  public confCuotasRoute:any = INTERNAL_ROUTES.MODULO_CUOTAS;
  public propietariosRoute:any = INTERNAL_ROUTES.MODULO_GESTION_PROPIETARIOS;

  constructor(private sharedTitleService: SharedTitleComponentService  ,private router:Router) {
    sharedTitleService.changeEmitted$.subscribe((tituloComponente) => {
      this.tituloComponente = tituloComponente;
    });
  }

  ngOnInit(): void {
    
  }

  recetearContenedorEnlases() {
    //VERIFICAR SI OTRO ELEMENTO ESTA ACTIVO Y DESACTIVARLO SI LO ESTA
    let contenedoresEnlases = document.querySelectorAll('.contenedor-enlases');

    contenedoresEnlases.forEach((elemento) => {
      if (elemento.classList.contains('menu-item-flotante')) {
        elemento.classList.remove('menu-item-flotante');
      }
      if (elemento.classList.contains('menu-item-espandible')) {
        elemento.classList.remove('menu-item-espandible');
      }
    });
  }

  cerrarSesion(){
    
  }

  abrirMenu() {
    this.recetearContenedorEnlases();

    this.menuDesplegado = this.menuDesplegado ? false : true;

  }

  espandirItemMenu(event: any): any {
    var elemento = event.target as HTMLElement;


    if(elemento.className == 'contenedor-perfil'){
      elemento.classList.toggle('cardview-float-perfil-active')
    }

    if (elemento.tagName == 'A') {
      this.recetearContenedorEnlases();

      this.menuDesplegado = false;
    }

    if (elemento.id == 'eventClick') {
      const contEnlales = elemento.parentNode?.querySelector(
        '.contenedor-enlases'
      );

      if (!this.menuDesplegado) {
        if (contEnlales?.classList.contains('menu-item-flotante')) {
          contEnlales?.classList.toggle('menu-item-flotante');
        } else {
          //VERIFICAR SI OTRO ELEMENTO ESTA ACTIVO Y DESACTIVARLO SI LO ESTA
          let contenedoresEnlases = document.querySelectorAll(
            '.contenedor-enlases'
          );

          contenedoresEnlases.forEach((elemento) => {
            if (elemento.classList.contains('menu-item-flotante')) {
              elemento.classList.remove('menu-item-flotante');
            }
          });

          contEnlales?.classList.toggle('menu-item-flotante');
        }
        return false;
      }

      if (contEnlales?.classList.contains('menu-item-espandible')) {
        contEnlales?.classList.toggle('menu-item-espandible');
      } else {
        //VERIFICAR SI OTRO ELEMENTO ESTA ACTIVO Y DESACTIVARLO SI LO ESTA
        let contenedoresEnlases = document.querySelectorAll(
          '.contenedor-enlases'
        );

        contenedoresEnlases.forEach((elemento) => {
          if (elemento.classList.contains('menu-item-espandible')) {
            elemento.classList.remove('menu-item-espandible');
          }
        });

        contEnlales?.classList.toggle('menu-item-espandible');
      }
    }
  }
  irRecibos(id:string,colaborador:string){
      this.router.navigate(['/dashboard/report/average'] ,{queryParams:{id:id,colaborador:colaborador}})
  }
  
}