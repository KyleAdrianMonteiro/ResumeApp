import { Component } from '@angular/core';
import { FirebaseService } from './services/firebase.service';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Kyle Monteiro';
  
  constructor() {}
}
