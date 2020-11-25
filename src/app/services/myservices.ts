import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DatosService {
  url='https://jsonplaceholder.typicode.com/posts'
  constructor(
    private http: HttpClient
  ){
    console.log('servicio')
  }

  getDatos(){
    let header = new HttpHeaders().set('Type-content','aplication/json')
    return this.http.get(this.url, {
      headers:header
    })
  }
}
