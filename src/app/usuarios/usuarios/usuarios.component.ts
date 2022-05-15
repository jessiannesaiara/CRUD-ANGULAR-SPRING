import { Component, OnInit } from '@angular/core';
import { Usuarios } from '../model/usuarios';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {

  usuarios: Usuarios[] = [
    {_id: '1',name: 'Davi', email: 'davi@gmail.com'}
  ];
  displayedColumns = ['name','email'
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
