import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'addition'})
export class AdditionPipe implements PipeTransform {
  transform(value: number, value2: string): number {
    let exp = parseFloat(value2);
    return value + exp;
  }
}
