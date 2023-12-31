import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  number = 0; //bc the world should be 0 indexed

  increment() {
    this.number++;
  }

  // need to call this on mobile device shake
  clear() {
    this.number = 0;
  }
}
