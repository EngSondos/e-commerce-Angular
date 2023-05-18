import { CartService } from './../services/cart.service';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../Interfaces/product';
import data from '../../assets/products-list.json';


@Component({
  selector: 'app-product-detalis',
  templateUrl: './product-detalis.component.html',
  styleUrls: ['./product-detalis.component.css']
})
export class ProductDetalisComponent {
  listproduct:Product[]=data;
  product:any;
  constructor(private activetedRoute:ActivatedRoute, private serviceCart:CartService){}
  ngOnInit(){
    // console.log(this.activetedRoute.snapshot.params['id'])
   this.product= this.listproduct.find( element => element.id ==this.activetedRoute.snapshot.params['id'])
  }
  AddToCart(){
    this.serviceCart.AddProductToCart(this.product);
  }
}
