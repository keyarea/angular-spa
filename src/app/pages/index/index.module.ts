import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index.component';
import { IndexRoutingModule } from './index-routing.module';
import { NgZorroAntdModule } from 'ng-zorro-antd';

@NgModule({
  imports: [
    CommonModule,
    IndexRoutingModule,
    NgZorroAntdModule
  ],
  declarations: [IndexComponent]
})
export class IndexModule { }
