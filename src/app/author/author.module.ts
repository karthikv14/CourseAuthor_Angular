import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PageComponent } from './page.component';
import { ListComponent } from './list.component';
import { DetailComponent } from './detail.component';
import { AUTHOR_ROUTES } from './author.routing';
import { AuthorService } from './author.service';
import { FormComponent } from './form.component';


@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    AUTHOR_ROUTES
  ],
  declarations: [PageComponent, ListComponent, DetailComponent, FormComponent],
  providers: [AuthorService]
})
export class AuthorModule { }
