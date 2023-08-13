import { Component} from '@angular/core';
import { Course } from '../course';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  selectedCourse: any;
  showCourseList = true;
  showCourseDetail = false;

  courseSelectEventHandler(course: Course) {
    this.selectedCourse = course;
    this.showCourseDetail = true;
    this.showCourseList = false;
  }

  backEventHandler(): void {
    this.showCourseDetail = false;
    this.showCourseList = true;
  }
}
