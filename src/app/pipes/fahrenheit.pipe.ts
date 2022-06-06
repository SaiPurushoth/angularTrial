import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fahrenheit'
})
export class FahrenheitPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    var temp=(value-32)/1.8;
    return temp.toFixed(2);
  }

}
