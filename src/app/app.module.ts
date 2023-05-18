import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductComponent } from './product/product.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { ProductDetalisComponent } from './product-detalis/product-detalis.component';
import { CartComponent } from './cart/cart.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { StockPipe } from './Piplines/stock.pipe';
import { PricePipe } from './Piplines/price.pipe';
import { DiscountPipe } from './Piplines/discount.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import{HttpClientModule} from'@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProductsListComponent,
    ProductComponent,
    LoginComponent,
    RegistrationComponent,
    ProductDetalisComponent,
    CartComponent,
    NotFoundComponent,
    StockPipe,
    PricePipe,
    DiscountPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
