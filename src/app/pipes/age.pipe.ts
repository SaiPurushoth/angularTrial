import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {

  transform(value: Date, ...args: unknown[]): unknown {
    let age = Math.abs(Date.now() - value.getDate());
return age;
  }

}
