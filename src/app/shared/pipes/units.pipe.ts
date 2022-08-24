import { Pipe, PipeTransform } from '@angular/core';

export type UnitType = {
  LENGTH: 'cm',
  WEIGHT: 'g'
}

@Pipe({
  name: 'units'
})
export class UnitsPipe implements PipeTransform {

  transform(value: string | number, type: UnitType): unknown {
    return `${value} ${type}`;
  }

}
