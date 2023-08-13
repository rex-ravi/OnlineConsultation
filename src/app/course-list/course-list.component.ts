import {
  Component,
  EventEmitter,
  Output,
  OnInit,
  OnDestroy,
} from '@angular/core';
import { Course, courses } from '../course';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css'],
})
export class CourseListComponent implements OnInit, OnDestroy {
  courseList: Course[] = [];
  showCourseDetail = false;
  @Output()
  courseSelectEvent: EventEmitter<Course> = new EventEmitter();
  ngOnInit(): void {
    this.courseList = courses;
  }

  getCourseDetails(course?: Course): void {
    this.courseSelectEvent.emit(course);
  }
  ngOnDestroy(): void {}
}
