import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';

// Component


// Page
import { AdminModule } from './pages/admin/admin.module';
import { LoginModule } from './pages/login/login.module';
import { IndexModule } from './pages/index/index.module';
import { TeacherModule } from './pages/teacher/teacher.module';
import { NotFoundModule } from './pages/not-found/not-found.module';

// module
import { AppRoutingModule} from './app-routing.module';

// pipe
import { SwitchPipe } from './pipes/switch.pipe';


registerLocaleData(zh);


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    NgZorroAntdModule,
    ReactiveFormsModule,
    AdminModule,
    LoginModule,
    IndexModule,
    TeacherModule,
    NotFoundModule,
    AppRoutingModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }],
  bootstrap: [AppComponent]
})
export class AppModule { }
