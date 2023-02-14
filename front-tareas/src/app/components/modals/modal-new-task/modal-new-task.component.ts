import { Component, OnDestroy, OnInit, HostListener, ViewChild, ElementRef, Input } from '@angular/core';
import { AlertController, ModalController, Platform } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { Task } from 'src/app/interfaces/Task';
import { TaskService } from 'src/app/services/task.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { ErrorService } from 'src/app/services/error.service';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-modal-crear-cuenta',
  templateUrl: './modal-new-task.component.html',
  styleUrls: ['./modal-new-task.component.scss'],
})
export class ModalNewTaskComponent implements OnInit {
  
  titulo: string = 'Tareas';
  private subscriptions: any;
  actualizar: boolean = false;
  @Input() insert: boolean = false;
  @Input() espacios: boolean = false;
  @Input() id: number = 0;
  @Input() description: string = '';

  formNewTask = {
    task: ''
  };

  constructor(
    private modalCtrl: ModalController,
    public alertController: AlertController,
    public platform: Platform,
    public _taskService: TaskService,
    private toastr: ToastrService,
    private _errorService: ErrorService,
  ) {}
  
  /**
   * Funcion ngOnInit -
   * Encargada de ejecutarse al iniciar la aplicacion
   *
   * @memberof 
   */
  ngOnInit(): void {
    this.readyPlatform();
  }

  /**
   * Funcion ngOnDestroy -
   * Encargada de ejecutarse al finalizar la aplicacion
   * @memberof 
   */
  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  /**
   * Funcion readyPlatform -
   * Encargada de ejecutarse al estar listo el DOM
   *
   * @memberof 
   */
  readyPlatform() {
    this.platform.ready().then((readySource) => {
      this.startComponents();
    });
  }

  /**
   * Funcion startComponents -
   * Encargada de inicializar variables al iniciar el componete
   *
   * @memberof 
   */
  startComponents() {
    this.subscriptions = new Subscription();
    this.formNewTask = {
      task: this.description
    };
  }
  
  /**
   * Funcion closeModal -
   * Encargada de cerrar modal
   *
   * @memberof 
   */
  closeModal() {
    this.modalCtrl.dismiss({
      actualizar: this.actualizar
    });
  }

  /**
   * Funcion newTask -
   */
  newTask() {
    const task: Task = {
      id: 0,
      description: this.formNewTask.task,
      idUser: JSON.parse(localStorage.getItem("user")+'')[0].id
    }
    let sub = this._taskService.newTask(task).subscribe({
      next: (v) => {
        this.toastr.success(`La tarea se registro con exito`, 'Tarea');
        this.actualizar = true;
        this.closeModal();
      },
      error: (e: HttpErrorResponse) => {
        this._errorService.msjError(e);
      }
    })
    this.subscriptions.add(sub);
  }

  /**
   * Funcion newTask -
   */
  upTask() {
    const task: Task = {
      id: this.id,
      description: this.formNewTask.task
    }
    let sub = this._taskService.upTask(task).subscribe({
      next: (v) => {
        this.toastr.success(`La tarea se actualizo con exito`, 'Tarea');
        this.actualizar = true;
        this.closeModal();
      },
      error: (e: HttpErrorResponse) => {
        this._errorService.msjError(e);
      }
    })
    this.subscriptions.add(sub);
  }

  onChangeTime(event: any){
    this.espacios = event.trim().length !== 0;
  }
}