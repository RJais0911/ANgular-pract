import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  productData: {
    name: string;
    brand: string;
    price: number;
  }[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productData = this.productService.getProductData();
  }
}
