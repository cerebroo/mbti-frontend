import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {MatRadioChange} from '@angular/material';

@Component({
  selector: 'mb-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RatingComponent {

  @Input() max = 7;
  @Input() prefix = 'Disagree';
  @Input() suffix = 'Agree';
  @Input() title: string;
  @Input() disabled = false;
  @Input() value: number;

  @Output() valueChange = new EventEmitter<number>();

  onChange(change: MatRadioChange) {
    this.valueChange.emit(change.value);
  }
}
