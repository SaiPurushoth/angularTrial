import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'celsius'
})
export class CelsiusPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    var temp=(value*1.8)+32;
    return temp.toFixed(2);
  }

}
