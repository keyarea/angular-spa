import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';

// component

// 已经结束的课程页面
import { ClosedCoursesComponent } from './closed-courses/closed-courses.component';

// 课程审核
import { CourseAuditComponent } from './course-audit/course-audit.component';

// 正在进行的课程
import { OngoingCoursesComponent } from './ongoing-courses/ongoing-courses.component';

// 学生管理
import { StudentManagementComponent } from './student-management/student-management.component';

// 教师查看
import { TeacherInfoComponent } from './teacher-info/teacher-info.component';

// 教师审核
import { TeacherAuditComponent } from './teacher-audit/teacher-audit.component';

// 未处理的消息
import { UnprocessedMessagesComponent } from './unprocessed-messages/unprocessed-messages.component';

// 处理的消息
import { ProcessedMessagesComponent } from './processed-messages/processed-messages.component';

// 新建消息
import { NewMessagesComponent } from './new-messages/new-messages.component';

// 已发送的消息
import { SentMessagesComponent } from './sent-messages/sent-messages.component';

// 体现请求
import { WithdrawalRequestComponent } from './withdrawal-request/withdrawal-request.component';

// 体现记录
import { WithdrawalRecordComponent } from './withdrawal-record/withdrawal-record.component';

// 订单记录
import { OrderRecordComponent } from './order-record/order-record.component';

// 人员管理
import { UserManagementComponent } from './user-management/user-management.component';

// 角色管理
import { RoleManagementComponent } from './role-management/role-management.component';

// 管理员首页
import { IndexComponent } from './index/index.component';

const routes: Routes = [
  { path: 'admin' , component: AdminComponent, children:
      [
        {
          path: 'student', component: StudentManagementComponent
        },
        {
          path: 'course/audit', component: CourseAuditComponent
        },
        {
          path: 'course/ongoing', component: OngoingCoursesComponent
        },
        {
          path: 'course/closed', component: ClosedCoursesComponent
        },
        {
          path: 'teacher/info', component: TeacherInfoComponent
        },
        {
          path: 'teacher/audit', component: TeacherAuditComponent
        },
        {
          path: 'message/unprocessed', component: UnprocessedMessagesComponent
        },
        {
          path: 'message/processed', component: ProcessedMessagesComponent
        },
        {
          path: 'message/new', component: NewMessagesComponent
        },
        {
          path: 'message/sent', component: SentMessagesComponent
        },
        {
          path: 'withdrawal/request', component: WithdrawalRequestComponent
        },
        {
          path: 'withdrawal/record', component: WithdrawalRecordComponent
        },
        {
          path: 'order/record', component: OrderRecordComponent
        },
        {
          path: '', component: IndexComponent
        },
        {
          path: 'user', component: UserManagementComponent
        },
        {
          path: 'role', component: RoleManagementComponent
        }
      ]
  }
];


@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class AdminRoutingModule { }
