import { Component, OnInit } from '@angular/core';
import { CourseService } from './course.service';
import { Course } from './course';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  template: `
<div class="panel panel-default" >
<!-- Default panel contents -->
<div class="panel-heading">List of courses</div>
<div class="panel-body">
<button type = "button" class = "btn btn-primary" (click)= "add()"> add </button>
</div>

<!-- Table -->
<table class="table table-striped">
  <thead>
    <tr>
      <th> Course ID </th>
      <th> Course Name </th>
      <th> Action </th>
    </tr>
  </thead>
  <tbody>
    <tr *ngFor ="let course of courses">
      <td>{{course.id}}</td>
      <td>{{course.name}}</td>
      <td>
        <button type = "button" class = "btn btn-primary" (click)= "edit(course.id)"> edit </button>
        <button type = "button" class = "btn btn-primary" (click)= "delete(course)"> delete </button>
      </td>
  </tbody>
</table>
</div>
<router-outlet> </router-outlet> 
`,
  styles: []
})
export class ListComponent implements OnInit {
  courses: Array<Course> = [];
  constructor(private courseService: CourseService, private router:Router) { }

  ngOnInit() {
    this.courseService.getCourses().subscribe(response=>{
        this.courses = response.json();
    },error => console.log(error.json()));
  }

  edit(courseId : String){
    this.router.navigate(['/courses/form',courseId, true])
  }

  delete(course){
    this.courseService.deleteCourses(course.id).subscribe(response=>{
      let index = this.courses.indexOf(course);
      this.courses.splice(index,1);
    },error => console.log(error));
  }

  add(){
    this.router.navigate(['/courses/form'])
  }

}
