import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Task } from '../interfaces/Task';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private myAppUrl: string;
  private myApiUrl: string;

  constructor(private http: HttpClient) {
    this.myAppUrl = environment.endpoint;
    this.myApiUrl = 'api/tasks'
  }

  getTasks(task: Task): Observable<any> {
    return this.http.post(`${this.myAppUrl}${this.myApiUrl}`, task);
  }

  newTask(task: Task): Observable<any> {
    return this.http.post(`${this.myAppUrl}${this.myApiUrl}/newTask`, task);
   }

   upTask(task: Task): Observable<any> {
    return this.http.post(`${this.myAppUrl}${this.myApiUrl}/upTask`, task);
   }

   delTask(id: Task) {
    return this.http.delete(`${this.myAppUrl}${this.myApiUrl}/delTask?id=${id}`);
   }
}
