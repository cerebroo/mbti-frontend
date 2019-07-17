import { Component, Input } from '@angular/core';
import {Inclination} from '../../models/inclination.enum';

@Component({
  selector: 'mb-inclination-bar',
  templateUrl: './inclination-bar.component.html',
  styleUrls: ['./inclination-bar.component.scss']
})
export class InclinationBarComponent {
  @Input() prefix: string;
  @Input() suffix: string;
  @Input() inclination: Inclination;
}
