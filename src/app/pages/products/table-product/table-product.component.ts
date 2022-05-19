import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from 'src/app/models/product';
import { ProductService } from '../../../services/product.service';
@Component({
  selector: 'app-table-product',
  templateUrl: './table-product.component.html',
  styleUrls: ['./table-product.component.css']
})
export class TableProductComponent implements OnInit {
  productList!: IProduct[];
  constructor(private productService: ProductService) {
    this.productList = this.productService.getProducts()
  }

  ngOnInit(): void {
  }

}
