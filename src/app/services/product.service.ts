import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  API_URL: string = 'http://localhost:4201/products';

  constructor(private http: HttpClient) { }

  getProduct(id: number) {
    return this.http.get(`${this.API_URL}/${id}`);
  }

  getProducts() {
    return this.http.get(this.API_URL)
  }

  removeProduct() {

  }

  addProduct(product: any) {
  }

  updateProduct() {

  }


}
