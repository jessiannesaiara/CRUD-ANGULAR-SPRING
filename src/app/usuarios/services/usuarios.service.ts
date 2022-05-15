import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Usuarios } from '../model/usuarios';


@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private httpClient: HttpClient) { }

  list(): Usuarios[] {
    return  [{_id: '1',name: 'Davi', email: 'davi@gmail.com'}];
  }
}
