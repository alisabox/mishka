import { CommonModule } from '@angular/common';
import {
  Component,
  Input,
} from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faBasketShopping,
  faRightToBracket,
} from '@fortawesome/free-solid-svg-icons';
import { TranslatePipe } from '../../pipes/translate.pipe';

export type IconKey = 'cart' | 'login';

@Component({
  selector: 'app-icon-button',
  templateUrl: './icon-button.component.html',
  styleUrls: ['./icon-button.component.scss'],
  standalone: true,
  imports: [
    RouterModule,
    CommonModule,
    FontAwesomeModule,
    TranslatePipe,
  ],
})
export class IconButtonComponent {
  faBasketShopping = faBasketShopping;
  faRightToBracket = faRightToBracket;

  @Input('iconKey')
  public iconKey: IconKey;

  @Input('textContent')
  public textContent: string;
}
