import { Component } from '@angular/core';
import { Service1 } from './app.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  service1Value: string;

  constructor(private s1: Service1) {
    this.service1Value = s1.value;
  }
}
