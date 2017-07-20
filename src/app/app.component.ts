import { Component } from '@angular/core';
import { trigger, transition, state, style, animate } from "@angular/animations";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('tr1', [
      state('smaller', style({
        transform: 'scale(1)'
      })),
      state('larger', style({
        transform: 'scale(3)'
      })),
      transition('smaller <-> larger', animate('300ms ease-in'))
    ])
  ]
})
export class AppComponent {
  title = 'app';
  state: string = 'smaller';
  animate() {
    this.state = this.state === 'larger' ? 'smaller' : 'larger';
  }
}
