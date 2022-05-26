import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  product: IProduct = {
    id: 0,
    name: "",
    price: 0,
    status: true || false,
  }

  constructor(private productService: ProductService,
    private router: Router,
    private activateRoute: ActivatedRoute) {
    const id = this.activateRoute.snapshot.paramMap.get('id')!;
    this.productService.getProduct(+id).subscribe(data => {
      this.product = data
    })
  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.product);
    this.productService.updateProduct(this.product).subscribe(data => {
      this.router.navigate(['/products']);
    });
  }

}
