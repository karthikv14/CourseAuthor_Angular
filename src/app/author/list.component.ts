import { Component, OnInit } from '@angular/core';
import { AuthorService } from './author.service';
import { Author } from './author';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  template: `
 <div class="panel panel-default" >
<!-- Default panel contents -->
<div class="panel-heading">List of authors</div>
<div class="panel-body">
<button type = "button" class = "btn btn-primary" (click)= "add()"> add </button>
</div>

<!-- Table -->
<table class="table table-striped">
  <thead>
    <tr>
      <th> Author ID </th>
      <th> Author Name </th>
      <th> Action </th>
    </tr>
  </thead>
  <tbody>
    <tr *ngFor ="let author of authors">
      <td>{{author.authorId}}</td>
      <td>{{author.authorName}}</td>
      <td>
        <button type = "button" class = "btn btn-primary" (click)= "edit(author.authorId)"> edit </button>
        <button type = "button" class = "btn btn-primary" (click)= "delete(author)"> delete </button>
      </td>
  </tbody>
</table>
</div>
<router-outlet> </router-outlet> 
  `,
  styles: []
})
export class ListComponent implements OnInit {
  authors: Array<Author> = [];
  constructor(private authorService: AuthorService, private router:Router) { }

ngOnInit() {
    this.authorService.getAuthors().subscribe(response=>{
        this.authors = response.json();
    },error => console.log(error.json()));
  }

  edit(authorId : String){
    this.router.navigate(['/authors/form',authorId])
  }

  delete(author){
    this.authorService.deleteAuthors(author.authorId).subscribe(response=>{
      let index = this.authors.indexOf(author);
      this.authors.splice(index,1);
    },error => console.log(error));
  }

  add(){
    this.router.navigate(['/authors/form'])
  }


}
