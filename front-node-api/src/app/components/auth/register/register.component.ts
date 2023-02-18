import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';
import { AuthserviceService } from '../../../services/auth/authservice.service';
import { Router, Routes } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  registro : FormGroup;

  constructor(private fb: FormBuilder, private srv:AuthserviceService, private router: Router) {
    this.registro = this.fb.group({
      nombre: [''],
      email: [''],
      password: ['']
    });
   }

  ngOnInit(): void {
    
  }

  async registrarse(){
    console.log('el form', this.registro.value);
    await this.srv.registrarUsuarios(this.registro.value)
    .subscribe(res => {
      console.log('la res', res)
    })
    this.router.navigate(['tareas/auth/login']);
  }

}
