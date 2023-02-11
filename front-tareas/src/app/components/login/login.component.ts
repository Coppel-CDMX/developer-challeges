import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ErrorService } from 'src/app/services/error.service';
import { UserService } from 'src/app/services/user.service';
import { Subscription } from 'rxjs';
import { Platform } from '@ionic/angular';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/interfaces/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string = '';
  password: string = '';
  loading: boolean = false;
  formLogin: any = {};
  smallContainer: boolean = true;
  smallScreen: boolean = true;
  passwordTypeInput: string;
  private subscriptions: any;
  constructor(private toastr: ToastrService,
    private _userService: UserService,
    private router: Router,
    private _errorService: ErrorService,
    public platform: Platform) { 
      this.passwordTypeInput = '';
    }

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
    this.passwordTypeInput = 'password';
    this.getScreenSize();
  }

  /**
   * Funcion iniciarSesion -
   * Encargada de realicar el logeo de usuario
   *
   * @memberof InicioComponent
   */
  async iniciarSesion() {
    const user: User = {
      username: this.formLogin.correo.toUpperCase(),
      password: this.formLogin.contrasenia
    }
    this.loading = true;
    let sub = this._userService.login(user).subscribe({
      next: (user) => {
        localStorage.setItem('token', user[0]);
        localStorage.setItem('user', JSON.stringify(user[1]));
        this.router.navigate(['/dashboard'])
      },
      error: (e: HttpErrorResponse) => {
        this._errorService.msjError(e);
        this.loading = false
      }
    });
    this.subscriptions.add(sub);
  };
  
  /**
   * Funcion tooglePasswordMode -
   * Encargada de verificar si el tipo de campo es texto lo cambia a password y viceversa,
   * además verificara el icono si es 'eye-off' lo cambiara a 'eye' y viceversa
   *
   * @memberof InicioComponent
   */
  togglePasswordMode() {
    this.passwordTypeInput = this.passwordTypeInput === 'text' ? 'password' : 'text';
  }

  /**
  * Evento HostListener - window:resize
  * Encargado de revisar la resolucion de pantalla
  * 
  * @param {*} [event] - resize
  * @memberof HomeComponent
  */
  @HostListener('window:resize', ['$event'])
  getScreenSize() {
    this.smallScreen = true;
    this.smallContainer = true;
    if ( window.innerWidth > 768 )
      this.smallScreen = false;
    if ( window.innerHeight > 450 )
      this.smallContainer = false;
  }
}
