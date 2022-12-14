import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'price',
  standalone: true,
})
export class PricePipe implements PipeTransform {

  transform(value: string | number): unknown {
    value = value.toString();

    if (!value || isNaN(parseFloat(value))) {
      return null;
    }

    return `${value} ¥`;
  }
}
