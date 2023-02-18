import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TareasserviceService {

  constructor(private http:HttpClient) { }

  getTareas(){
    let token = localStorage.getItem('token');
    var headers_object = new HttpHeaders().set("Authorization", "token " + token);
    let url ='http://localhost:8000/api/tareas/'; 
    return this.http.get(url,{headers: headers_object})
  }
  crearTarea(body:any): Observable<any>{
    let token = localStorage.getItem('token');
    var headers_object = new HttpHeaders().set("Authorization", "token " + token);
    let url ='http://localhost:8000/api/tareas/'; 
    return this.http.post(url,body,{headers: headers_object})
  }
  actualizaTarea(body:any): Observable<any>{
    let token = localStorage.getItem('token');
    var headers_object = new HttpHeaders().set("Authorization", "token " + token);
    let url ='http://localhost:8000/api/tareas/'+body.id; 
    return this.http.put(url,body,{headers: headers_object})
  }
  deleteTarea(body:any): Observable<any>{
    let token = localStorage.getItem('token');
    var headers_object = new HttpHeaders().set("Authorization", "token " + token);
    let url ='http://localhost:8000/api/tareas/'+body.id; 
    return this.http.delete(url,{headers: headers_object})
  }
  
}
