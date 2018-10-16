import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeacherComponent } from './teacher.component';

// Component
import { CoursesClosedComponent } from './courses-closed/courses-closed.component';
import { CoursesInfoComponent } from './courses-info/courses-info.component';
import { CoursesOngoingComponent } from './courses-ongoing/courses-ongoing.component';
import { CoursesPublishComponent } from './courses-publish/courses-publish.component';
import { CoursesRecordComponent } from './courses-record/courses-record.component';
import { CoursesShelvedComponent } from './courses-shelved/courses-shelved.component';
import { FinanceIncomeComponent } from './finance-income/finance-income.component';
import { FinanceRecordComponent } from './finance-record/finance-record.component';
import { MyIndexComponent } from './my-index/my-index.component';
import { MyAuditComponent } from './my-audit/my-audit.component';
import { MyOtherComponent } from './my-other/my-other.component';
import { OrderComponent } from './order/order.component';

const routes: Routes = [
  { path: 'teacher', component: TeacherComponent, children: [
      {
        path: 'courses/closed', component: CoursesClosedComponent
      },
      {
        path: 'courses/info', component: CoursesInfoComponent
      },
      {
        path: 'courses/ongoing', component: CoursesOngoingComponent
      },
      {
        path: 'courses/publish', component: CoursesPublishComponent
      },
      {
        path: 'courses/record', component: CoursesRecordComponent
      },
      {
        path: 'courses/shelved', component: CoursesShelvedComponent
      },
      {
        path: 'finance/income', component: FinanceIncomeComponent
      },
      {
        path: 'finance/record', component: FinanceRecordComponent
      },
      {
        path: 'me/index', component: MyIndexComponent
      },
      {
        path: 'me/audit', component: MyAuditComponent
      },
      {
        path: 'me/other', component: MyOtherComponent
      },
      {
        path: 'order', component: OrderComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeacherRoutingModule {}
