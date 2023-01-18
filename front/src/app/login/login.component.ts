import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {UserService} from "../services/user.service";
import {Router} from "@angular/router";
import {BackendService} from "../services/backend.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  formLogin: FormGroup;

  ngOnInit(): void {}

  constructor(
    private userService: UserService,
    private backendService: BackendService,
    private router: Router
  ) {
    this.formLogin = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    })
  }

  onSubmit() {
    this.userService.login(this.formLogin.value)
      .then(response => {
        this.getToken(response);
      })
      .catch(error => console.log(error))
  }

  onClick() {
    this.userService.loginWithGoogle()
      .then(response => {
        this.getToken(response);
      })
      .catch(error => console.log(error))
  }

  getToken(clientObj: any) {
    this.backendService.get_token(clientObj).subscribe(
      (data) => {
        console.log(data);
        sessionStorage.setItem('token', data.token);
        this.router.navigate(['/dashboard']);
      },
      (error) => {console.log(error)}
    )
  }
}
