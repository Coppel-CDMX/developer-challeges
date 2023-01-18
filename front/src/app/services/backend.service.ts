import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class BackendService {
  base_url = 'https://dev-dot-speedy-cargo-373105.uc.r.appspot.com/'
  constructor(private http: HttpClient) {}

  get_token(client_obj: any): Observable<any>{
    let url = this.base_url + 'get_token/';
    return this.http.post<any>(url, {client_obj});
  }

  create_task(task: string): Observable<any>{
    const headers = {
      headers: new HttpHeaders()
        .append('Content-Type', 'application/json')
        .append('Authorization', 'Token ' + sessionStorage.getItem('token')),
    };
    let url = this.base_url + 'task/';
    return this.http.post<any>(url, task, headers);
  }

  get_tasks(): Observable<any>{
    const headers = {
      headers: new HttpHeaders()
        .append('Content-Type', 'application/json')
        .append('Authorization', 'Token ' + sessionStorage.getItem('token')),
    };
    let url = this.base_url + 'task/';
    return this.http.get<any>(url, headers);
  }

  mark_task_done(taskId: any): Observable<any>{
    const headers = {
      headers: new HttpHeaders()
        .append('Content-Type', 'application/json')
        .append('Authorization', 'Token ' + sessionStorage.getItem('token')),
    };
    let url = this.base_url + 'task/' + taskId + '/done/';
    return this.http.post<any>(url, {}, headers);
  }
}
