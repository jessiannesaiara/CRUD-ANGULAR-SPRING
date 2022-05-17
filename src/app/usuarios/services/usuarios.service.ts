import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, tap } from 'rxjs/operators';

import { Usuarios } from '../model/usuarios';

@Injectable({
  providedIn: 'root',
})
export class UsuariosService {
  private readonly API = '/assets/usuarios.json';

  constructor(private httpClient: HttpClient) {}

  list() {
    return this.httpClient.get<Usuarios[]>(this.API).pipe(
      first(),
      tap(usuarios => console.log(usuarios))
    );
  }
}

/*
 return this.httpClient.get<Usuarios[]>(this.API).pipe(
      first(),
      tap(usuarios => console.log(usuarios))
    );
  }*/
