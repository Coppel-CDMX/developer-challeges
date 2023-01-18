import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import {RouterModule, Routes} from "@angular/router";
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskItemComponent } from './task-item/task-item.component';
import { TaskNewComponent } from './task-new/task-new.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { SigninComponent } from './signin/signin.component';
import {ReactiveFormsModule} from "@angular/forms";
import {canActivate, redirectUnauthorizedTo} from "@angular/fire/auth-guard";
import { HttpClientModule } from '@angular/common/http';


const appRouter: Routes = [
    {path: '', pathMatch: 'full', redirectTo: '/dashboard' },
    {path: "login", component: LoginComponent},
    {path: "register", component: SigninComponent},
    {path: "home", component: HomeComponent},
    {path: "navBar", component: NavBarComponent},
    {
      path: "dashboard",
      component: DashboardComponent,
      ...canActivate(() => redirectUnauthorizedTo(['/login']))
    },
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    DashboardComponent,
    LoginComponent,
    TaskListComponent,
    TaskItemComponent,
    TaskNewComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRouter),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
