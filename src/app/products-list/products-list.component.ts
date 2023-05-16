import { Component } from '@angular/core';
import { Product } from '../Interfaces/product';
import data from '../../assets/products-list.json';
import { Router } from '@angular/router';


@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent {
  listproduct:Product[]=data;
  
   constructor(private router:Router , ){}
   
   getId(id:number){
    this.router.navigate(['productdetalis',id]);
  }
  
}
