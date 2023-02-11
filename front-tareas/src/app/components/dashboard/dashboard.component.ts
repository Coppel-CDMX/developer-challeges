import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/interfaces/Task';
import { TaskService } from 'src/app/services/task.service';
import { Subscription } from 'rxjs';
import { Platform, ModalController, AlertController } from '@ionic/angular';
import { ModalNewTaskComponent } from '../modals/modal-new-task/modal-new-task.component';
import { User } from 'src/app/interfaces/user';
import { HttpErrorResponse } from '@angular/common/http';
import { ErrorService } from 'src/app/services/error.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  listTask: Task[] = []
  paramsModal = {
    component: null,
    backdropDismiss: false,
    componentProps: {},
    cssClass: 'modal-grande',
    enableBackdropDismiss: false,
  };
  private subscriptions: any;

  constructor(
    private _taskService: TaskService,
    public platform: Platform,
    private modalController: ModalController,
    private _errorService: ErrorService,
    private alertController: AlertController,    
    private toastr: ToastrService,
    ) { }

  ngOnInit(): void {
    this.readyPlatform();
  }

  /**
   * Funcion readyPlatform -
   * Encargada de ejecutarse al estar listo el DOM
   *
   * @memberof InicioComponent
   */
  readyPlatform() {
    this.platform.ready().then((readySource) => {
      this.startComponents();
    });
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.subscriptions.unsubscribe(); 
  }

  /**
   * Funcion ionViewWillLeave -
   * Encargada de ejecutarse cuando la vista esta a punto de cambiar
   * @memberof InicioComponent
   */
     ionViewWillLeave() {
      this.ngOnDestroy();
    }

    /**
   * Funcion startComponents -
   * Encargada de inicializar variables al iniciar el componete
   *
   * @memberof InicioComponent
   */
  startComponents() {
    this.subscriptions = new Subscription();
    this.getProducts();
  }

  /**
   * Funcion getProducts -
   */
  getProducts() {
    const task: Task = {
      idUser: JSON.parse(localStorage.getItem("user")+'')[0].id
    }
    let sub = this._taskService.getTasks(task).subscribe({
      next: (data) => {
        this.listTask = data;
      },
      error: (e: HttpErrorResponse) => {
        this._errorService.msjError(e);
      }
    });
    this.subscriptions.add(sub);
  }

  /**
   * Funcion modalNewTask -
   *
   * @memberof CarouselAvisosComponent
   */
  async modalNewTask() {
    const modal = await this.modalController.create({
      component: ModalNewTaskComponent,
      backdropDismiss: false,
      componentProps: {
        'insert': true,
      },
    });
    await modal.present();
    const { data } = await modal.onDidDismiss();
    if (data.actualizar)
      this.getProducts();
  }

  /**
   * Funcion modalEditTask -
   */
  async modalEditTask(task: any) {
    const modal = await this.modalController.create({
      component: ModalNewTaskComponent,
      backdropDismiss: false,
      componentProps: {
        'insert': false,
        'id': task.id,
        'description': task.description
      },
    });
    await modal.present();
    const { data } = await modal.onDidDismiss();
    if (data.actualizar)
      this.getProducts();
  }

   /**
    * Funcion presentModalInformativa -
    * Encargada de mostrar modal informativa
    * 
    * @param {*} msg
    * @memberof 
    */
   async modalDeleteTask(task:any) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'ATENCIÓN!!!',
      message: 'Estas seguro de eliminar la tarea...',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'
        },
        {
          text: 'Aceptar',
          handler: () => {
            let sub = this._taskService.delTask(task.id).subscribe({
              next: (v) => {
                this.toastr.success(`La tarea se elimino con exito`, 'Tarea');
                this.getProducts();
              },
              error: (e: HttpErrorResponse) => {
                this._errorService.msjError(e);
              }
            })
            this.subscriptions.add(sub);
            this.getProducts();
          }
      }],
      backdropDismiss: false
    });
    await alert.present();
  }
}
