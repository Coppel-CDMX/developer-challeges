import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsRoutingModule } from './components-routing.module';
import { LoginComponent } from './auth/login/login.component';
import { TablaComponent } from './tareas/tabla/tabla.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './auth/register/register.component';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    TablaComponent
  ],
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ComponentsModule { }
