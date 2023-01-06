import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

interface CartProduct {
  [key: Product['id']]: {
    product: Product;
    quantity: number;
  }
}

@Injectable({
  providedIn: 'root',
})
export class CartService {

  private _products: CartProduct = {};

  public addToCart(product: Product): void {
    if (product.id in this._products) {
      this._products[product.id].quantity += 1;
    } else {
      this._products[product.id] = {
        product: product,
        quantity: 1,
      };
    }
  }

  public getItems(): CartProduct {
    return this._products;
  }

  public clearCart(): void {
    this._products = {};
  }
}
