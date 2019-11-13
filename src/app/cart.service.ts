import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items = [];

  constructor() { 

  }

  /* it should be an interface */

  addToCart(product) {
    this.items.push(product);
  }

  addFruitToCart(fruit) {
    this.items.push(fruit);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
  
}
