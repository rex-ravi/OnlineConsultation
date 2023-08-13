import { Component } from '@angular/core';
import { Course } from '../course';
import { FilterModel } from '../filter-model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  selectedCourse: any;
  showCourseList = true;
  showCourseDetail = false;
  filterModel: any;

  courseSelectEventHandler(course: Course) {
    this.selectedCourse = course;
    this.showCourseDetail = true;
    this.showCourseList = false;
  }

  backEventHandler(): void {
    this.showCourseDetail = false;
    this.showCourseList = true;
  }

  filterEventHandler(filterModel: FilterModel): void {
    this.filterModel = filterModel;
  }
}
