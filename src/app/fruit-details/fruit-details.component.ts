import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';
import { FruitService } from '../fruit.service';

@Component({
  selector: 'app-fruit-details',
  templateUrl: './fruit-details.component.html',
  styleUrls: ['./fruit-details.component.css']
})
export class FruitDetailsComponent implements OnInit {

  fruit$: Object;

  constructor(private route: ActivatedRoute,private data: FruitService){
    
    this.route.params.subscribe( params => this.fruit$ = params.fruitId );

  }

  ngOnInit() {
    
    this.data.getFruit(this.fruit$).subscribe(
      data => this.fruit$ = data
    );

  }

}
