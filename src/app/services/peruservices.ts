import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
  })
export class PeruService {
    url='https://restcountries.eu/rest/v2/name/peru?fullText=true'
    constructor(
      private http: HttpClient
    ){
      console.log('servicio per')
    }
  
    getPais(){
      let header = new HttpHeaders().set('Type-content','aplication/json')
      return this.http.get(this.url, {
        headers:header
      })
    }
  }