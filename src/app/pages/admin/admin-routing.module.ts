import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  { path: 'admin' , component: AdminComponent, children: [
      {
        path: 'login',
        component: LoginComponent,
        pathMatch: 'full'
      }
    ]}
];


@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class AdminRoutingModule { }
