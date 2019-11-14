import { Component, OnInit } from '@angular/core';
import { FruitService } from '../fruit.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-fruit-list',
  templateUrl: './fruit-list.component.html',
  styleUrls: ['./fruit-list.component.css']
})
export class FruitListComponent implements OnInit {

  // https://offering.solutions/blog/articles/2016/02/01/consuming-a-rest-api-with-angular-http-service-in-typescript/
  // https://blog.usejournal.com/how-to-map-rest-api-data-using-decorator-pattern-in-angular-6-94eb49ba16b1
  // https://www.youtube.com/watch?v=rdLJNGZvlAA
  
  fruits$: Object;
  
  constructor(private dataService: FruitService) {

  }

  ngOnInit() {

    this.dataService.getFruits().subscribe(
      data=> {
        this.fruits$ = data
        alert(JSON.stringify(data));
      }
    );

  }
  
}
