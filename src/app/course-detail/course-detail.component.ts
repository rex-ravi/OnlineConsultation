import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit,
  OnDestroy,
} from '@angular/core';
import { Course } from '../course';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css'],
})
export class CourseDetailComponent implements OnInit, OnDestroy {
  @Input()
  course: any;
  @Output()
  backEvent: EventEmitter<void> = new EventEmitter();
  ngOnInit(): void {}

  onBack(): void {
    this.backEvent.emit();
  }
  ngOnDestroy(): void {}
}
