import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FruitService {

  constructor(private http: HttpClient) { 
  }

  getFruits() {
    // return this.http.get('http://jsonplaceholder.typicode.com/users')
    // return this.http.get('http://localhost:3000/fruits')
    // return this.http.get('http://localhost:3001/fruits')
    return this.http.get('https://my-json-server.typicode.com/solblog/food/fruits');
  }

}
