import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-route-one',
  template: `<h1 class="text-6xl text-center">route-one works!</h1>`
})
export class RouteOneComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
