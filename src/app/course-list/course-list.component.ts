import {
  Component,
  EventEmitter,
  Output,
  OnInit,
  OnDestroy,
  Input,
} from '@angular/core';
import { Course, courses } from '../course';
import { FilterModel } from '../filter-model';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css'],
})
export class CourseListComponent implements OnInit, OnDestroy {
  courseList: Course[];
  showCourseDetail = false;
  @Output()
  courseSelectEvent: EventEmitter<Course> = new EventEmitter();
  @Input()
  filterModel: any;
  constructor() {
    this.courseList = courses;
  }
  ngOnInit(): void {}
  ngOnChanges(): void {
    this.courseList = courses;
    if (this.filterModel?.fee > 0) {
      this.courseList = this.courseList.filter(
        (course) => course.fee <= this.filterModel.fee
      );
    }
    if (this.filterModel?.interestedSubjects.length > 0) {
      this.courseList = this.courseList.filter((course) =>
        course.name.includes(this.filterModel.interestedSubjects)
      );
    }
    if (this.filterModel?.search.length > 0) {
      this.courseList = this.courseList.filter(
        (course) =>
          course.name.includes(this.filterModel.search) ||
          course.university.name.includes(this.filterModel.search)
      );
    }
    if (this.filterModel?.ieltsScore > 0) {
      this.courseList = this.courseList.filter(
        (course) => this.filterModel?.ieltsScore >= course.minIELTSScoreNeeded
      );
    }
  }

  getCourseDetails(course?: Course): void {
    this.courseSelectEvent.emit(course);
  }
  ngOnDestroy(): void {}
}
