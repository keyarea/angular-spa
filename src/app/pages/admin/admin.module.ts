import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CourseAuditComponent } from './course-audit/course-audit.component';
import { OngoingCoursesComponent } from './ongoing-courses/ongoing-courses.component';
import { ClosedCoursesComponent } from './closed-courses/closed-courses.component';
import { StudentManagementComponent } from './student-management/student-management.component';
import { TeacherInfoComponent } from './teacher-info/teacher-info.component';
import { TeacherAuditComponent } from './teacher-audit/teacher-audit.component';
import { UnprocessedMessagesComponent } from './unprocessed-messages/unprocessed-messages.component';
import { ProcessedMessagesComponent } from './processed-messages/processed-messages.component';
import { NewMessagesComponent } from './new-messages/new-messages.component';
import { SentMessagesComponent } from './sent-messages/sent-messages.component';
import { WithdrawalRequestComponent } from './withdrawal-request/withdrawal-request.component';
import { WithdrawalRecordComponent } from './withdrawal-record/withdrawal-record.component';
import { OrderRecordComponent } from './order-record/order-record.component';

import { AdminService } from './admin.service';

import { SwitchPipe } from '../../pipes/switch.pipe';
import { IndexComponent } from './index/index.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { RoleManagementComponent } from './role-management/role-management.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AdminRoutingModule,
    NgZorroAntdModule
  ],
  declarations: [
    SwitchPipe,
    AdminComponent,
    CourseAuditComponent,
    OngoingCoursesComponent,
    ClosedCoursesComponent,
    StudentManagementComponent,
    TeacherInfoComponent,
    TeacherAuditComponent,
    UnprocessedMessagesComponent,
    ProcessedMessagesComponent,
    NewMessagesComponent,
    SentMessagesComponent,
    WithdrawalRequestComponent,
    WithdrawalRecordComponent,
    OrderRecordComponent,
    IndexComponent,
    UserManagementComponent,
    RoleManagementComponent
  ],
  providers: [
   AdminService
  ]
})
export class AdminModule { }
