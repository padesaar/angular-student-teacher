import { Component } from '@angular/core';
import {Student} from "../../models/Student";
import {Teacher} from "../../models/Teacher";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-teacher-form',
  templateUrl: './teacher-form.component.html',
  styleUrls: ['./teacher-form.component.css']
})
export class TeacherFormComponent {
  isShowForm: boolean = true;
  teachers: Teacher[] = [];

  firstName: string = '';
  lastName: string = '';
  speciality: string = '';
  address: string = '';

  email: string = '';


  addTeacher(teacherForm: NgForm) {
    this.teachers.push(new Teacher(this.firstName, this.lastName, this.speciality, this.address, this.email));
    teacherForm.reset();
  }

}
