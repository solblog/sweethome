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
  fruitId$: Object;

  constructor(private route: ActivatedRoute,private dataService: FruitService){
    
    console.log('Testing console');
    // this.route.params.subscribe( params => {console.log(params)} );
    this.route.params.subscribe( params => this.fruitId$ = params.fruitId );

  }

  ngOnInit() {
    
    this.dataService.getFruit(this.fruitId$).subscribe(
      data => {
        // alert('Call the function');
        this.fruit$ = data
        // this.share();
      }
    );
    
  } 
    
  share() {
    // alert('something');
    window.alert(JSON.stringify(this.fruit$));
  }

}
