import {Component} from '@angular/core';

@Component({
  selector: 'mb-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  onRatingChange(change: number) {
    console.log('Rating changed to ' + change);
  }
}
