import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {Inclination} from './inclination';

@Component({
  selector: 'mb-inclination-bar',
  templateUrl: './inclination-bar.component.html',
  styleUrls: ['./inclination-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InclinationBarComponent {
  @Input() prefix: string;
  @Input() suffix: string;
  @Input() inclination: Inclination;
}
