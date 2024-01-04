import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'usdToNrs',
  standalone: true
})
export class UsdToNrsPipe implements PipeTransform {

  transform(value: number, ...args: number[]): unknown{
    const [price]=args;
    return value*price;
  }

}
