import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterCourseComponent } from './filter-course.component';

describe('FilterCourseComponent', () => {
  let component: FilterCourseComponent;
  let fixture: ComponentFixture<FilterCourseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilterCourseComponent]
    });
    fixture = TestBed.createComponent(FilterCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
