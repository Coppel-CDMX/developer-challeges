import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShareRoutingModule } from './share-routing.module';
import { CrearEditarComponent } from './modals/crear-editar/crear-editar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotFoundComponent } from './not-found/not-found.component';


@NgModule({
  declarations: [
    CrearEditarComponent,
    DashboardComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    ShareRoutingModule,
    
  ]
})
export class ShareModule { }
