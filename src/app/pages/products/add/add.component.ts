import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IProduct } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  product: IProduct = {
    id: 0,
    name: "",
    price: 0,
    status: true || false,
  }
  constructor(private productService: ProductService,
    private router: Router,
    private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const id = +this.activateRoute.snapshot.paramMap.get('id')!;
    if(id){
      this.productService.getProduct(+id).subscribe(data => {
        this.product = data
      })
    }
  }

  onSubmit() {
    console.log(this.product)
    this.productService.addProduct(this.product).subscribe(data => {
      this.router.navigate(['/products']);
    })
  }

}
