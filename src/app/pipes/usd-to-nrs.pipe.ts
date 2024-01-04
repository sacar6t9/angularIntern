import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'usdToNrs',
  standalone: true
})
export class UsdToNrsPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
