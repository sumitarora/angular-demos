import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feature-one-two',
  template: `
    <h1 class="text-6xl text-center">feature one two works!</h1>
  `,
})
export class FeatureOneTwoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
