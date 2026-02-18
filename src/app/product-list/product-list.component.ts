import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-list',
  imports: [],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {


  productData:{
    name: string;
    brand: string;
    price: number;
}[] | undefined;

  constructor(private productService:ProductService){}

  ngOnInit(){
    this.productData=this.productService.getProductData();
  }

}
