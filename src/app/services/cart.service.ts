import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

export interface CartProduct {
  product: Product;
  quantity: number;
}

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private _products: CartProduct[] = [];

  constructor() {
    this._products = JSON.parse(localStorage.getItem('products') || '[]');
  }

  public addToCart(product: Product): void {
    const addedProduct = this._products.find(item => item.product.id === product.id);

    if (addedProduct) {
      addedProduct.quantity += 1;
    } else {
      this._products.push({
        product,
        quantity: 1,
      });
    }

    this._syncProducts();
  }

  public updateQuantity(productId: string | number, newQuantity: number): void {
    const updatedProduct = this._products.find(item => item.product.id === productId);

    if (updatedProduct) {
      updatedProduct.quantity = newQuantity;
    }

    this._syncProducts();
  }

  public removeProduct(productId: string | number): void {
    const index = this._products.findIndex(item => item.product.id === productId);
    this._products = [...this._products.slice(0, index), ...this._products.slice(index + 1)];

    this._syncProducts();
  }

  public getItems(): CartProduct[] {
    return this._products;
  }

  public clearCart(): void {
    this._products = [];
    this._syncProducts();
  }

  private _syncProducts(): void {
    localStorage.setItem('products', JSON.stringify(this._products));
  }
}
