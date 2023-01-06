import { CommonModule } from '@angular/common';
import {
  Component,
  Input,
} from '@angular/core';
import { RouterModule } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { IconButtonComponent } from 'src/app/shared/base/icon-button/icon-button.component';
import { PictureComponent } from 'src/app/shared/base/picture/picture.component';
import { TranslatePipe } from 'src/app/shared/pipes/translate.pipe';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule,
    TranslatePipe,
    PictureComponent,
    IconButtonComponent,
    MatIconModule,
    MatTooltipModule,
  ],
})
export class ProductCardComponent {
  @Input('product')
  public product: Product;

  constructor(
    private readonly _cartService: CartService,
  ) { }

  public addToCart(): void {
    this._cartService.addToCart(this.product);
  }
}
