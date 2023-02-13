import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ErrorService } from 'src/app/services/error.service';
import { UserService } from 'src/app/services/user.service';
import { Subscription } from 'rxjs';
import { Platform } from '@ionic/angular';
import { User } from 'src/app/interfaces/user';
// Import the AuthService type from the SDK
import { AuthService } from '@auth0/auth0-angular';

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
    public platform: Platform,
    public auth: AuthService
    ) { 
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
    this.auth.isAuthenticated$.subscribe(isAuthenticated => {
      if (isAuthenticated) {
        this.registroUsuarioOauth();
      }
    });
    this.getScreenSize();
  }

  /**
   * Funcion iniciarSesion -
   * Encargada de realicar el logeo de usuario
   *
   * @memberof InicioComponent
   */
  async iniciarSesion( oauth2: boolean, mail: string, password: string ) {
    console.log(oauth2);
    const user: User = {
      username: oauth2 ? mail.toUpperCase() : this.formLogin.correo.toUpperCase(),
      password: oauth2 ? password : this.formLogin.contrasenia
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

/**
 * Funcion loginOauth
 */
  loginOauth() {
    this.auth.loginWithRedirect();
  }

  /**
   * Funcion registroUsuarioOauth -
   */
  registroUsuarioOauth() {
    this.auth.isAuthenticated$.subscribe(isAuthenticated => {
      if (isAuthenticated) {
        this.auth.user$.subscribe((profile) => {
          let email = JSON.stringify(profile?.email);
          let password = JSON.stringify(profile?.sub);
          const user: User = {
            username: email.toUpperCase(),
            password: password
          }
          let sub = this._userService.signIn(user).subscribe({
            next: (v) => {
              this.toastr.success(`El usuario ${this.username} fue registrado con exito`, 'Usuario registrado');
              this.router.navigate(['/login']);
            },
            error: (e: HttpErrorResponse) => {
              if (e.error.msg.substring(0, 26) === 'Ya se encuentra registrado')
                this.iniciarSesion(true, email, password);
              else
                this._errorService.msjError(e);
            }
          })
          this.subscriptions.add(sub);
        });
        this.router.navigate(['/dashboard']);
      }
    });
  }
}