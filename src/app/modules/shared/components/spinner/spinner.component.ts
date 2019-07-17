import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'mb-spinner',
  template: '<mat-spinner></mat-spinner>',
  styleUrls: ['./spinner.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SpinnerComponent {
}
