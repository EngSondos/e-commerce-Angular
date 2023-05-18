import { Component } from '@angular/core';
import { count } from 'rxjs';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  count!:number;
constructor(private CartService:CartService){
}
ngOnInit(){
   this.CartService.cartCountValue.subscribe((val)=>{ this.count=val})
}

}
