import {
  Component,
  OnInit,
  OnDestroy,
  EventEmitter,
  Output,
} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FilterModel } from '../filter-model';

@Component({
  selector: 'app-filter-course',
  templateUrl: './filter-course.component.html',
  styleUrls: ['./filter-course.component.css'],
})
export class FilterCourseComponent implements OnInit, OnDestroy {
  filterForm: any;
  @Output()
  filterEvent: EventEmitter<FilterModel> = new EventEmitter();

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.filterForm = this.formBuilder.group({
      search: [''],
      fee: [''],
      ieltsScore: [''],
      interestedSubjects: [''],
    });
  }

  onFilter(): void {
    const filterModel: FilterModel = {
      search: this.filterForm.controls.search.value,
      ieltsScore: this.filterForm.controls.ieltsScore.value,
      interestedSubjects: this.filterForm.controls.interestedSubjects.value,
      fee: this.filterForm.controls.fee.value,
    };
    this.filterEvent.emit(filterModel);
  }

  ngOnDestroy(): void {}
}
