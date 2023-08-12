import { Component, OnInit, OnDestroy } from '@angular/core';
import { Course, courses } from '../course';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css'],
})
export class CourseListComponent implements OnInit, OnDestroy {
  courseList: Course[] = [];
  ngOnInit(): void {
    this.courseList = courses;
  }

  getCourseDetails(course: Course): void {
    
  }
  ngOnDestroy(): void {}
}
