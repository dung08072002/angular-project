import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from 'src/app/models/product';
import { ProductService } from '../../../services/product.service';
@Component({
  selector: 'app-table-product',
  templateUrl: './table-product.component.html',
  styleUrls: ['./table-product.component.css']
})
export class TableProductComponent implements OnInit {
  productList!: any;
  
  constructor(private productService: ProductService) {
    this.showProducts();
  }

  ngOnInit(): void {
  }

  showProducts() {
    this.productService.getProducts().subscribe(data => {
      this.productList = data;
    })
  }

}
