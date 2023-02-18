import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthserviceService } from 'src/app/services/auth/authservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  login: FormGroup;
  constructor(private fb: FormBuilder, private srv: AuthserviceService, private router: Router) {
    this.login = this.fb.group({
      email: [''],
      password: ['']
    });
  }
  ngOnInit(): void {
  }

  logearse(){
    console.log('el form', this.login.value);
    this.srv.login(this.login.value)
    .subscribe((res:any) => {
      console.log('la res', res)
      localStorage.setItem('usuario', res.usuario.nombre);
      localStorage.setItem('id', res.usuario.id);
      localStorage.setItem('token', res.token);
      this.router.navigate(['tareas/auth/task']);
    })
  }
}
