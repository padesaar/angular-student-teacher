import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StudentComponent} from "./student/student.component";
import {StudentFormComponent} from "./student-form/student-form.component";



@NgModule({
  declarations: [
    StudentComponent,
    StudentFormComponent
  ],
  imports: [
    CommonModule
  ]
})
export class StudentModuleModule { }
