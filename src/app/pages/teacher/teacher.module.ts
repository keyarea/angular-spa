import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { TeacherComponent } from './teacher.component';

import { TeacherRoutingModule } from './teacher-routing.module';
import { TeacherService } from './teacher.service';

import { CoursesOngoingComponent } from './courses-ongoing/courses-ongoing.component';
import { CoursesClosedComponent } from './courses-closed/courses-closed.component';
import { CoursesInfoComponent } from './courses-info/courses-info.component';
import { CoursesPublishComponent } from './courses-publish/courses-publish.component';
import { CoursesRecordComponent } from './courses-record/courses-record.component';
import { CoursesShelvedComponent } from './courses-shelved/courses-shelved.component';
import { OrderComponent } from './order/order.component';
import { FinanceIncomeComponent } from './finance-income/finance-income.component';
import { FinanceRecordComponent } from './finance-record/finance-record.component';
import { MyIndexComponent } from './my-index/my-index.component';
import { MyAuditComponent } from './my-audit/my-audit.component';
import { MyOtherComponent } from './my-other/my-other.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgZorroAntdModule,
    TeacherRoutingModule
  ],
  declarations: [
    TeacherComponent,
    CoursesOngoingComponent,
    CoursesClosedComponent,
    CoursesInfoComponent,
    CoursesPublishComponent,
    CoursesRecordComponent,
    CoursesShelvedComponent,
    OrderComponent,
    FinanceIncomeComponent,
    FinanceRecordComponent,
    MyIndexComponent,
    MyAuditComponent,
    MyOtherComponent
  ],
  providers: [
    TeacherService
  ]
})
export class TeacherModule { }
