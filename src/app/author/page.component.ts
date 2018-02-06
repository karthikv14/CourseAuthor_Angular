import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page',
  template: `
    <h1> Authors </h1>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class PageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
