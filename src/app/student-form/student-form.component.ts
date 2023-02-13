import { Component } from '@angular/core';
import {Student} from "../../models/Student";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent {
  isShowForm: boolean = false;
  students: Student[] = [];

  firstName: string = '';
  lastName: string = '';
  age: number = 0;
  address: string = '';

  email: string = '';


  addStudent(studentForm: NgForm) {
    this.students.push(new Student(this.firstName, this.lastName, this.age, this.address, this.email));
    studentForm.reset();
  }

  showStudentForm() {
    this.isShowForm = true;
  }
}
