import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsuariosService } from 'src/app/data/services/api/usuarios/usuarios.service';
import { SharedTitleComponentService } from 'src/app/data/services/shared-title-component.service';
import { enviroment } from 'src/environments/enviroments.dev';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css'],
})
export class ListarComponent {
  usuarios: any[] = [];
  registrosPendientes: any[] = [];

  registrosPendientesTemp: any;

  urlDominio: string = environment.urlDomain;

  constructor(
    private apiService: UsuariosService,
    private router: Router,
    private sharedTitleService: SharedTitleComponentService
  ) {
    this.getUsuarios(String(localStorage.getItem('id_fraccionamiento')));
    this.getRegistrosPendientes(
      String(localStorage.getItem('nombre_fraccionamiento'))
    );
    sharedTitleService.emitChange('Lista de usuarios');
  }

  getUsuarios(idFraccionamiento: string) {
    this.apiService.getAll(idFraccionamiento).subscribe((usuarios: any) => {
      console.log(usuarios.body);
      this.usuarios = usuarios.body;
    });
  }

  getRegistrosPendientes(fraccionamiento: string) {
    this.apiService
      .getRegistrosPendientes(fraccionamiento)
      .subscribe((data: any) => {
        this.registrosPendientes = data.body;
        console.log(data);
      });
  }

  opcionesParaCuentasPendientes(registro: any) {
    this.registrosPendientesTemp = registro;
  }

  cerrarModal() {
    this.registrosPendientesTemp = null;
  }

  reenviarconfirmacionDeAcceso(registrosPendientesTemp: any) {
    let data: any = {
      correo: registrosPendientesTemp.correo,
      nombre: registrosPendientesTemp.nombre,
      apellidos: registrosPendientesTemp.apellidos,
      nombre_fraccionamiento: String(
        localStorage.getItem('nombre_fraccionamiento')
      ),
      codigo_postal: String(
        localStorage.getItem('codigo_postal_fraccionamiento')
      ),
      rol: registrosPendientesTemp.rol,
    };

    this.apiService.confirmarRegistro(data).subscribe(() => {
      //? ACTUALIZO LOS DATOS EN LA TABLE
      //this.getRegistrosPendientes(String(localStorage.getItem("nombre_fraccionamiento")))
      this.apiService
        .getRegistrosPendientes(
          String(localStorage.getItem('nombre_fraccionamiento'))
        )
        .subscribe((data: any) => {
          this.registrosPendientes = data.body;
          console.log(data);
          //?ACTUALIZO EL OBJETO OBJETO REGISTRO PENDIENTE
          //? AL QUE SE REENVIO EL ACCESO
          for (let registro of this.registrosPendientes) {
            if (registro.id == registrosPendientesTemp.id) {
              this.registrosPendientesTemp = registro;
            }
          }
        });
    });
  }
}
