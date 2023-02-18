import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  constructor(private http:HttpClient) { }

  registrarUsuarios(body:any){
    let url ='http://localhost:8000/api/usuarios/'; 
    return this.http.post(url,body)
  }

  login(body:any){
    let url = 'http://localhost:8000/api/usuarios/login';
    return this.http.post(url,body)
  }
}
