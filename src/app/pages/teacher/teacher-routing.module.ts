import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeacherComponent } from './teacher.component';

const routers: Routes = [
  { path: '', component: TeacherComponent, children: [

    ] }
];

@NgModule({
  imports: [RouterModule.forChild(routers)],
  exports: [RouterModule]
})
export class TeacherRoutingModule {}
