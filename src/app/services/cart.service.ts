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
  cartCountValue= this.cartCount.asObservable();
  productsInCart=this.productInCart.asObservable();
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
  deleteProduct(){

    // this.productInCart.next();

  }
}
