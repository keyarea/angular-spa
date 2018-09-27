import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './pages/admin/admin.component';
import { LoginComponent } from './pages/login/login.component';

const appRoutes: Routes = [
  { path: 'admin', redirectTo: '/admin' , pathMatch: 'full'},
  { path: 'login', component: LoginComponent , pathMatch: 'full'},
  { path: '', redirectTo: '/index', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
