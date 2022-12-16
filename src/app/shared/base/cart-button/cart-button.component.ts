import {
  Component,
  Input,
} from '@angular/core';

@Component({
  selector: 'app-cart-button',
  templateUrl: './cart-button.component.html',
  styleUrls: ['./cart-button.component.scss'],
})
export class CartButtonComponent {

  @Input('textContent')
  public textContent: string;
}
