import {
  Component,
  Input,
} from '@angular/core';
import {
  faBasketShopping,
  faRightToBracket,
} from '@fortawesome/free-solid-svg-icons';

export type IconKey = 'cart' | 'login';

@Component({
  selector: 'app-icon-button',
  templateUrl: './icon-button.component.html',
  styleUrls: ['./icon-button.component.scss'],
})
export class IconButtonComponent {
  faBasketShopping = faBasketShopping;
  faRightToBracket = faRightToBracket;

  @Input('iconKey')
  public iconKey: IconKey;

  @Input('textContent')
  public textContent: string;
}
