import {
  Component,
  OnInit,
  OnDestroy,
  EventEmitter,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-filter-course',
  templateUrl: './filter-course.component.html',
  styleUrls: ['./filter-course.component.css'],
})
export class FilterCourseComponent implements OnInit, OnDestroy {
  filterForm: any;

  ngOnInit(): void {}

  onFilter(): void {}

  ngOnDestroy(): void {}
}
