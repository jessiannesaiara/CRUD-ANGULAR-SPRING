import { Component, OnInit } from '@angular/core';
import { Observable} from 'rxjs';
import { Usuarios } from '../model/usuarios';
import { UsuariosService } from './../services/usuarios.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {

  usuarios: Observable<Usuarios[]>;
  displayedColumns = ['name','email']

  constructor(private usuariosService: UsuariosService) {
    this.usuarios = this.usuariosService.list();
  }

  ngOnInit(): void {
  }

}
