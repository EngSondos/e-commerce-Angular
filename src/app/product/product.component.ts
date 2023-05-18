import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../Interfaces/product';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input() product!:Product
  @Output() private emitter= new EventEmitter

  count!:number;
  constructor(private cartService:CartService){
    this.cartService.cartCountValue.subscribe((val)=>this.count=val);
  }

  emitToParent(){
    this.emitter.emit(this.product.id)
  }
  AddToCart(){
    this.cartService.AddProductToCart(this.product);
    // console.log(this.cartService.productsInCart.subscribe((val)=>console.log(val)))
    this.cartService.changeCartCount(++this.count);
  }
}
