import { Component } from '@angular/core';
import { Product } from '../Interfaces/product';
import data from '../../assets/products-list.json';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';


@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent {
  listproduct:any;

   constructor(private router:Router ,private service:ApiService){
    this.service.getProducts().subscribe((value)=>this.listproduct =value)
   }

   getId(id:number){
    this.router.navigate(['productdetalis',id]);
  }

}
