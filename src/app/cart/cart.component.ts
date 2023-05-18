import { Component } from '@angular/core';
import { Product } from '../Interfaces/product';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent {
  count!:number;
  products!:Product[]
  product!:Product;
  totalPrice:number=0
  constructor(private service:CartService){}
  ngOnInit(){
    this.service.cartCountValue.subscribe((val)=>{ this.count=val})
    this.service.productsInCart.subscribe((val)=>{this.products=val})
    this.service.totalPrice.subscribe((val)=>this.totalPrice=val)
    console.log(this.totalPrice);
       this.service.getTotalPrice()

    }
  AddOne(product:Product){
  this.products.map((element)=>{
    if(element.id == product.id)
    {
      element.count!++;
    }});
    this.service.changeCartCount(++this.count);
    this.service.getTotalPrice()

  }
deleteOne(product:Product ,event:any)
{
  this.products.map((element,index)=>{
    if(element.id == product.id)
    {
      element.count!--;
      if(element.count==0){
        this.service.deleteProduct(product)
      }
    }
  });

  if(this.count == 0){
    this.count=0
    }else{
    this.service.changeCartCount(--this.count);
  }
  this.service.getTotalPrice()

}
deleteX(product:Product)
{
  this.service.deleteProduct(product)
  this.service.getTotalPrice()

}
}
