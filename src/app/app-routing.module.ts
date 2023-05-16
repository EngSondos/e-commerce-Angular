import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { combineLatest } from 'rxjs';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductDetalisComponent } from './product-detalis/product-detalis.component';
import { ProductComponent } from './product/product.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  {
    path:'',
    component:ProductsListComponent
  },
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:"register",
    component:RegistrationComponent
  },
  {
    path:"productdetalis/:id",
    component:ProductDetalisComponent
  },
  {
    path:"cart",
    component:CartComponent
  },
  {
    path:"**",
    component:NotFoundComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 }
