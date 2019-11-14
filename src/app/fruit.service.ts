import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FruitService {

  ROOT_URL;
  
  constructor(private http: HttpClient) { 
  }

  getFruits() {
    // return this.http.get('http://jsonplaceholder.typicode.com/users')
    // return this.http.get('http://localhost:3000/fruits')
    // return this.http.get('http://localhost:3001/fruits')
    return this.http.get('https://my-json-server.typicode.com/solblog/food/fruits');
  }

  getFruit(fruitId) {
    // return this.http.get('http://jsonplaceholder.typicode.com/users')
    // return this.http.get('http://localhost:3000/fruits')
    // return this.http.get('http://localhost:3001/fruits')
    alert("id:"+fruitId);

    
    // alert(JSON.stringify(this.http.get())

    let ROOT_URL = 'https://my-json-server.typicode.com/solblog/food/fruits/'+Number(fruitId);

    alert(ROOT_URL);

    this.http.get(this.ROOT_URL)
    .subscribe((data) => {
        alert('Do something');
        // alert("Data:"+data);
        // alert('JSON Stringfy:'+JSON.stringify(data));
    });

    // return this.http.get('https://my-json-server.typicode.com/solblog/food/fruits/'+Number(fruitId));
    return this.http.get(ROOT_URL);
  
  }

}
