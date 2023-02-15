import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TeacherComponent} from "./teacher/teacher.component";
import {TeacherFormComponent} from "./teacher-form/teacher-form.component";



@NgModule({
  declarations: [
    TeacherComponent,
    TeacherFormComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TeacherModuleModule { }
