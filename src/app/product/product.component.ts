import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../Interfaces/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input() product!:Product
  @Output() private emitter= new EventEmitter
 

  emitToParent(){
    this.emitter.emit(this.product.id)
  }
}
