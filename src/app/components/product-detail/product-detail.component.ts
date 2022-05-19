import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/models/product';
import { ProductService } from '../../services/product.service';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  productDetail!: IProduct | any
  constructor(
    private router: ActivatedRoute,
    private productService: ProductService
  ) {
    const id = this.router.snapshot.paramMap.get('id')!;
    this.productService.getProduct(+id).subscribe(data => this.productDetail = data)
  }

  ngOnInit(): void {
  }

}