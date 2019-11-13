import { Component, OnInit } from '@angular/core';
import { FruitService } from '../fruit.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-fruit-list',
  templateUrl: './fruit-list.component.html',
  styleUrls: ['./fruit-list.component.css']
})
export class FruitListComponent implements OnInit {
  
  fruits$: Object;
  
  constructor(private data: FruitService) { }

  ngOnInit() {

    this.data.getFruits().subscribe(
      data => this.fruits$ = data
    );

  }

}
