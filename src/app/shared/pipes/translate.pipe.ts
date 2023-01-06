import { Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from './../services/translate.service';

@Pipe({
  name: 'translate',
  pure: false,
  standalone: true,
})
export class TranslatePipe implements PipeTransform {

  constructor(private translate: TranslateService) { }

  transform(key: string): string {
    return this.translate.data[key] || key;
  }
}
