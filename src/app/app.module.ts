import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { UniversityListComponent } from './university-list/university-list.component';
import { HomeComponent } from './home/home.component';
import { CourseListComponent } from './course-list/course-list.component';
import { FilterCourseComponent } from './filter-course/filter-course.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [BrowserModule, ReactiveFormsModule, FormsModule, AppRoutingModule],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    UniversityListComponent,
    HomeComponent,
    CourseListComponent,
    FilterCourseComponent,
    CourseDetailComponent,
    RegistrationComponent,
    LoginComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
