import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './share/dashboard/dashboard.component';
import { TablaComponent } from './components/tareas/tabla/tabla.component';
import { NotFoundComponent } from './share/not-found/not-found.component';

const routes: Routes = [
  {
    path: 'tareas', loadChildren: () => import('./components/components.module').then(m => m.ComponentsModule),
  },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
