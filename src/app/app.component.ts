import { Component } from '@angular/core';
import {Teacher} from "../models/Teacher";
import {Student} from "../models/Student";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'school-application';

  teachers: Teacher[] = [];
  teacherTitle = 'List of teachers';

  students: Student[] = [];
  studentTitle = 'List of students'
}
