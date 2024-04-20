import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Serie } from './serie';

import { environment } from '../../environments/environment.development';



//Servicio: clases que ofrecen funciones que serán utilizadas por componentes u otros elementos Angular

//REGLAS DE SERVICIOS

//El servicio debe ser Inyectable (va a estar anotado con @Injectable(...))
//El componente que lo va a usar, lo debe declarar en su constructor.
//Cuando el componente es creado, Angular le inyecta una instancia del servicio.

@Injectable({
  //El servicio podrá ser utilizado en cualquier parte de la aplicación
  providedIn: 'root'
})


export class SerieService {
  private apiUrl = environment.baseUrl;

  // inyectar un servicio definido por angular que se llama HttpClient
  constructor(private http: HttpClient) {}

  //Obtiene todas las series de un sitio
  //Las funciones HTTP son asincronicas pero la aplicación que llamó, en este caso el front, sigue su curso. Por esta razón, estas funciones devuelven el resultado en un objeto Observable
  getSeries(): Observable<Serie[]> {
    return this.http.get<Serie[]>(this.apiUrl);
}


}
