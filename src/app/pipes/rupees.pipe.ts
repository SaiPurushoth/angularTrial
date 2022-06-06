import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rupees'
})
export class RupeesPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    return value * 76;
  }

}
