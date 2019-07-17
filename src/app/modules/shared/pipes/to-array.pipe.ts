import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'toArray'})
export class ToArrayPipe implements PipeTransform {
  transform(value: number, start = 0): number[] {
    const numbers = [];
    for (let i = start; i <= value; i++) {
      numbers.push(i);
    }
    return numbers;
  }
}
