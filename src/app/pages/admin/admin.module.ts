import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { LeftControlComponent } from './left-control/left-control.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    NgZorroAntdModule,
    FormsModule
  ],
  declarations: [AdminComponent, LeftControlComponent]
})
export class AdminModule { }
