import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-detail',
  template: `
    <p>
      detail Works for course id {{authorbooks}}
    </p>
  `,
  styles: []
})
export class DetailComponent implements OnInit, OnDestroy {

  authorbooks:string[];
  authorbooksSubscription:Subscription;

  constructor(private ac:ActivatedRoute) {
    //this.courseId = this.ac.snapshot.paramMap.get('courseId');
    this.authorbooksSubscription = this.ac.params.subscribe(params =>{
      this.authorbooks = params['authorbooks'];
    });
   }

  ngOnInit() {
  }

  ngOnDestroy(){
    this.authorbooksSubscription.unsubscribe();
  }
}
