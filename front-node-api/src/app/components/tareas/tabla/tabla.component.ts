import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { TareasserviceService } from '../../../services/tareas/tareasservice.service';
import swal from 'sweetalert2';
import Swal from 'sweetalert2';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {
  usuarioActivo: string = localStorage.getItem('usuario') || '';
  constructor(private fb: FormBuilder, private srv: TareasserviceService, private router: Router) {
    this.tarea = this.fb.group({
      nombre: [''],
      email: [''],
      password: ['']
    });
  }
  arrTask: any = [];
  tarea: FormGroup;
  ngOnInit(): void {
    this.getTareasTable();
  }
  getTareasTable() {
    this.srv.getTareas()
      .subscribe(res => {
        console.log('la res', res)
        this.arrTask = res;
      })
    // this.router.navigate(['tareas/auth/login']);
  }
  logout() {
    console.log("Local storage")
    localStorage.clear();
    console.log("Local storage")
    this.router.navigate(['tareas/auth/login']);
  }
  value: any;
  crear() {
    {
      const data: any = Swal.fire({
        title: 'Crear la tarea',
        input: 'text',
        inputAttributes: {
          autocapitalize: 'off'
        },
        inputValue: this.value,
        showCancelButton: true,
        confirmButtonText: 'enviar',
        cancelButtonText: 'cancelar',
        showLoaderOnConfirm: true,
        preConfirm: (res) => {
          return firstValueFrom(this.srv.crearTarea({ nombre: res, id_usuario: localStorage.getItem('id') }))
            .then(response => {
              console.log('response', response)
              if (!response) {
                throw new Error(response.errorMessage);
              }
              this.getTareasTable();
              return true;
            })
            .catch(error => {
              Swal.showValidationMessage(
                'Error'
              );
            });
        },
        allowOutsideClick: () => !Swal.isLoading()
      }).then((result) => {
        if (result && !result.dismiss) {
          Swal.showValidationMessage(
            'Exito'
          );

        }
      });
    }
  }
  actualizar(idTarea: number) {
    {
      const data: any = Swal.fire({
        title: 'actualizar la tarea',
        input: 'text',
        inputAttributes: {
          autocapitalize: 'off'
        },
        inputValue: this.value,
        showCancelButton: true,
        confirmButtonText: 'enviar',
        cancelButtonText: 'cancelar',
        showLoaderOnConfirm: true,
        preConfirm: (res) => {
          return firstValueFrom(this.srv.actualizaTarea({ nombre: res, id: idTarea, id_usuarios: localStorage.getItem('id') }))
            .then(response => {
              console.log('response', response)
              if (!response) {
                throw new Error(response.errorMessage);
              }
              this.getTareasTable();
              return true;
            })
            .catch(error => {
              Swal.showValidationMessage(
                'Error'
              );
            });
        },
        allowOutsideClick: () => !Swal.isLoading()
      }).then((result) => {
        if (result && !result.dismiss) {
          Swal.showValidationMessage(
            'Exito'
          );

        }
      });
    }
  }
  borrar(idTarea: number) {
    {
      const data: any = Swal.fire({
        title: 'borrar la tarea',
        // input: 'text',
        inputAttributes: {
          autocapitalize: 'off'
        },
        // inputValue: this.value,
        showCancelButton: true,
        confirmButtonText: 'enviar',
        cancelButtonText: 'cancelar',
        showLoaderOnConfirm: true,
        preConfirm: (res) => {
          return firstValueFrom(this.srv.deleteTarea({ nombre: res, id: idTarea, id_usuarios: localStorage.getItem('id') }))
            .then(response => {
              console.log('response', response)
              if (!response) {
                throw new Error(response.errorMessage);
              }
              this.getTareasTable();
              return true;
            })
            .catch(error => {
              Swal.showValidationMessage(
                'Error'
              );
            });
        },
        allowOutsideClick: () => !Swal.isLoading()
      }).then((result) => {
        if (result && !result.dismiss) {
          Swal.showValidationMessage(
            'Exito'
          );

        }
      });
    }
  }
}
