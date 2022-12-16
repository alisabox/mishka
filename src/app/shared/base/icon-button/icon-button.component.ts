import {
  Component,
  Input,
} from '@angular/core';
import {
  faBasketShopping,
  faRightToBracket,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-icon-button',
  templateUrl: './icon-button.component.html',
  styleUrls: ['./icon-button.component.scss'],
})
export class IconButtonComponent {
  faBasketShopping = faBasketShopping;
  faRightToBracket = faRightToBracket;

  @Input('iconKey')
  public iconKey: string;

  @Input('textContent')
  public textContent: string;
}
