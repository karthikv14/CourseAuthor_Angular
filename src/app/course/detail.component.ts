import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-detail',
  template: `
    <p>
      detail Works for course id {{courseId}}
    </p>
  `,
  styles: []
})
export class DetailComponent implements OnInit, OnDestroy {

  courseId:string;
  courseIdSubscription:Subscription;

  constructor(private ac:ActivatedRoute) {
    //this.courseId = this.ac.snapshot.paramMap.get('courseId');
    this.courseIdSubscription = this.ac.params.subscribe(params =>{
      this.courseId = params['courseId'];
    });
   }

  ngOnInit() {
  }

  ngOnDestroy(){
    this.courseIdSubscription.unsubscribe();
  }
}
