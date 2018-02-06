import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { CourseService } from './course.service';
import { ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.html',
  styles: []
})
export class FormComponent implements OnInit, OnDestroy{

  courseForm:FormGroup;
  courseIdSubscription:Subscription;
  id:string;
  flag:string;
  

  constructor(private courseService:CourseService, private fb:FormBuilder,
              private activatedRoute:ActivatedRoute, private router:Router) { }

  ngOnInit() {
    this.courseForm = this.fb.group({
      id: this.fb.control('',[Validators.required]),
      name:this.fb.control('',[Validators.required]),
      
    })

  this.courseIdSubscription = this.activatedRoute.params.subscribe((params) => {
    //console.log(this.activatedRoute.snapshot.params);
    this.flag = params['flag'];
    console.log(this.flag);
    if(params['courseId'] !== undefined){
      this.courseService.getCourse(params['courseId']).subscribe(response => {
        let course = response.json();
        this.id=course.id;
        
        this.courseForm.setValue({
          id:course.id,
          name:course.name
        });
      }, error => console.log(error.json()));
    }
  });

  }  

  ngOnDestroy(){
   this.courseIdSubscription.unsubscribe();
  }
  
  get courseId(){
    return this.courseForm.get('id');
  }

  get courseName(){
    return this.courseForm.get('name');
  }

  isDisabled(){
    if (this.flag === 'true')
    return true;
    else
    return false;

  }

  handleFormSubmit(){  
    console.log(this.courseForm.value);
   // this.courseForm.value.courseId = this.courseId;
    this.courseService.saveCourse(this.courseForm.value).subscribe(response => {
      console.log(response.json());
      this.courseForm.reset();
      this.router.navigate(['/courses/list']);
    }, error => console.log(error.json()));
  }
}
