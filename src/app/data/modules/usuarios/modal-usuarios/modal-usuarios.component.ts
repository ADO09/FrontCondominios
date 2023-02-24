import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/data/services/usuarios/usuarios.service';

@Component({
  selector: 'app-modal-usuarios',
  templateUrl: './modal-usuarios.component.html',
  styleUrls: ['./modal-usuarios.component.css']
})
export class ModalUsuariosComponent implements OnInit {
  aux = false;
  constructor(private usuariosSerivce: UsuariosService) { }

  ngOnInit(): void {
    this.verificarModal();
  }

  closeModal():void{
    this.usuariosSerivce.$modal.emit(false);
  }

  verificarModal():void{
    this.aux = true;
  }

}
