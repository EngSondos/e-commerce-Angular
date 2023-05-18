import { Product } from './../Interfaces/product';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
// import { Product } from '../Interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartCount = new BehaviorSubject(0);
  private productInCart=new BehaviorSubject<Product[]>([]);
  private total = new BehaviorSubject(0);

  cartCountValue= this.cartCount.asObservable();
  productsInCart=this.productInCart.asObservable();
  totalPrice=this.total.asObservable();

  constructor() { }

  changeCartCount(value:number){
    this.cartCount.next(value)
  }

  AddProductToCart(product:Product):null{
    if(product.count){
       product.count++;
       return null;
    }
   product['count']=1
    this.productInCart.next(this.productInCart.value.concat(product));
    return null
  }
  deleteProduct(product:Product){

    this.productInCart.next(this.productInCart.value.filter((elemnt)=>{
      return elemnt.id !=product.id
    }));
    product.count=0
  }
totalnum:number=0
  getTotalPrice()
{
  this.totalnum=0;
  this.productInCart.value.map((element)=>{
    this.totalnum +=element.count!*element.price
  })
  this.total.next(this.totalnum)

}
}
