import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TeacherComponent } from './teacher-module/teacher/teacher.component';
import { StudentComponent } from './student-module/student/student.component';
import { StudentFormComponent } from './student-module/student-form/student-form.component';
import { TeacherFormComponent } from './teacher-module/teacher-form/teacher-form.component';
import {FormsModule} from "@angular/forms";
import {StudentModuleModule} from "./student-module/student-module.module";
import {TeacherModuleModule} from "./teacher-module/teacher-module.module";

@NgModule({
  declarations: [
    AppComponent,
    TeacherComponent,
    StudentComponent,
    StudentFormComponent,
    TeacherFormComponent
  ],
    imports: [
        BrowserModule,
        FormsModule,
      StudentModuleModule,
      TeacherModuleModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
