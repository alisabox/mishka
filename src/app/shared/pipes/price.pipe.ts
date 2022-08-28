import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'price'
})
export class PricePipe implements PipeTransform {

  transform(value: string | number): unknown {
    value = value.toString();

    if (!value || isNaN(parseFloat(value))) {
      return null;
    }

    // if(value.length > 3) {
    //   value.
    //   const splitValue: string;
    //   for (let i = value.length - 1; i < 0; i--) {
    //     splitValue = splitValue
    //   }
    // }
    // const splitByGroups = value.toString().split('').reverse().join('').match(/.{3}/g)?.join(' ').split('').reverse().join('');
    // console.log(splittedString);
    return `${value} ¥`;
  }
}
