import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  product: { name: string, price: number } = {
    name: "",
    price: 0,
  }
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
  }

  onSubmit () {
    this.productService.addProduct(this.product)
  }

}
