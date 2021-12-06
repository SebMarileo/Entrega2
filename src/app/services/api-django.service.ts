import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { retry} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiDjangoService {

  constructor(private http: HttpClient) { }

  ruta_lista:string="http://127.0.0.1:8000/api/cursos/";

  listarTodo():Observable<any>{
    return this.http.get(this.ruta_lista).pipe(retry(2));
  }
}
