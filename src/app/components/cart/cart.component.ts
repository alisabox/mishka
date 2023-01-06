import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CartProduct, CartService } from 'src/app/services/cart.service';
import { TranslatePipe } from 'src/app/shared/pipes/translate.pipe';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  standalone: true,
  imports: [
    CommonModule,
    TranslatePipe,
    MatFormFieldModule,
    MatSelectModule,
  ],
})
export class CartComponent implements OnInit {
  private _products: CartProduct[] = [];

  public get products(): CartProduct[] {
    return this._products;
  }

  public get sum(): number {
    return this._products.reduce((prev, next) => {
      return prev + (next.quantity * next.product.price);
    }, 0);
  }

  constructor(
    private readonly _cartService: CartService,
  ) { }

  public ngOnInit(): void {
    this._products = this._cartService.getItems();
  }

  public updateQuantity(quantity: string, productId: string | number): void {
    const numQuantity = parseInt(quantity, 10);

    if (numQuantity) {
      this._cartService.updateQuantity(productId, numQuantity);
    } else {
      this._cartService.removeProduct(productId);
    }

    this._products = this._cartService.getItems();
  }

  public applyDiscount(event: any): void {
    event.preventDefault();
    return;
  }

  public checkOut(event: any): void {
    event.preventDefault();
    return;
  }
}
