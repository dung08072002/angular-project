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
    this.showProducts();
  }

  ngOnInit(): void {
  }

  showProducts() {
    this.productService.getProducts().subscribe(data => {
      this.productList = data;
    })
  }

  onRemoveItem(id: number) {
    const confirm = window.confirm("Do you want to remove this product !");
    this.productService.removeProduct(id).subscribe(() => {
      if (confirm) {
        this.productList = this.productList.filter(item => item.id !== id)
      }
    })

  }

}
