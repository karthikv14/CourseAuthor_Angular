import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PageComponent } from './page.component';
import { ListComponent } from './list.component';
import {FormComponent} from './form.component';
import { DetailComponent } from './detail.component';
import { COURSE_ROUTES } from './course.routing';
import { CourseService } from './course.service';


@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    COURSE_ROUTES
  ],
  declarations: [PageComponent, ListComponent, DetailComponent, FormComponent],
  providers: [CourseService]
})
export class CourseModule { }
