import { Injectable } from '@angular/core';
/*
 Enable HttpClient for cart service
*/
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items = [];

  constructor(private http: HttpClient) { 
  }

  /* it should be an interface */

  addToCart(product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  getShippingPrices() {
    return this.http.get('/assets/shipping.json');
  }

  /*
  addFruitToCart(fruit) {
    this.items.push(fruit);
  }
  */

}
