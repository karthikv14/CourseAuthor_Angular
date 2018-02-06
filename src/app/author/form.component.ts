import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AuthorService } from './author.service';
import { ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-form',
  templateUrl: './form.html',
  styles: []
})
export class FormComponent implements OnInit {

authorForm:FormGroup;
authorIdSubscription:Subscription;
authorId:string;

  constructor(private authorService:AuthorService, private fb:FormBuilder,
              private activatedRoute:ActivatedRoute, private router:Router) { }

  ngOnInit() {
    this.authorForm = this.fb.group({
      authorId: this.fb.control('',[Validators.required]),
      authorName:this.fb.control('',[Validators.required]),
      
    })

  this.authorIdSubscription = this.activatedRoute.params.subscribe((params) => {
    //console.log(this.activatedRoute.snapshot.params);

    if(params['authorId'] !== undefined){
      this.authorService.getAuthor(params['authorId']).subscribe(response => {
        let author = response.json();
        this.authorId=author.authorId;
        
        this.authorForm.setValue({
          authorId:author.authorId,
          authorName:author.authorName
        });
      }, error => console.log(error.json()));
    }
  });

  }  

  ngOnDestroy(){
   this.authorIdSubscription.unsubscribe();
  }
  
  // get authorId(){
  //   return this.authorForm.get('authorId');
  // }

  get authorName(){
    return this.authorForm.get('authorName');
  }


  handleFormSubmit(){  
    console.log(this.authorForm.value);
   // this.authorForm.value.authorId = this.authorId;
    this.authorService.saveAuthor(this.authorForm.value).subscribe(response => {
      console.log(response.json());
      this.authorForm.reset();
      this.router.navigate(['/authors/list']);
    }, error => console.log(error.json()));
  }

}
