import { count } from 'rxjs';
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

  constructor(private service:CartService){}
  ngOnInit(){
    this.service.cartCountValue.subscribe((val)=>{ this.count=val})
    this.service.productsInCart.subscribe((val)=>{this.products=val})
    }
  AddOne(product:Product){
 this.products.map((element)=>{
    if(element.id == product.id)
    {
      element.count!++;
    }
   });
   this.service.changeCartCount(++this.count);

  }
deleteOne(product:Product ,event:any)
{
  this.products.map((element,index)=>{
    if(element.id == product.id)
    {
      element.count!--;
      if(element.count==0){
        event.target.parentElement.parentElement.parentElement.remove()
        // delete this.products[index];
        this.service.productsInCart.subscribe((val)=>{
          // console.log(val)
      val = val.filter((element)=>{return element.id!=product.id})
         console.log(val)
         

        })


      }
    }
   });

   if(this.count == 0){
    this.count=0
   }else{
    this.service.changeCartCount(--this.count);
   }

}



}
