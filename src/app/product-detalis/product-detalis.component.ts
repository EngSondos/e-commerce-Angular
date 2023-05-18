import { CartService } from './../services/cart.service';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../Interfaces/product';
import data from '../../assets/products-list.json';
import { ApiService } from '../services/api.service';


@Component({
  selector: 'app-product-detalis',
  templateUrl: './product-detalis.component.html',
  styleUrls: ['./product-detalis.component.css']
})
export class ProductDetalisComponent {
  count!:number;
  listproduct:Product[]=data;
  product:any;
  constructor(private activetedRoute:ActivatedRoute, private serviceCart:CartService , private serviceProduct:ApiService){
    this.serviceCart.cartCountValue.subscribe((val)=>this.count=val);
    this.serviceProduct.getProduct(this.activetedRoute.snapshot.params['id']).subscribe((value)=>this.product=value)

  }
  ngOnInit(){
    // console.log(this.activetedRoute.snapshot.params['id'])
  }
  AddToCart(){
    this.serviceCart.AddProductToCart(this.product);
    this.serviceCart.changeCartCount(++this.count);

  }
}
