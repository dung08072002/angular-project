import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProduct } from '../models/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  API_URL: string = 'http://localhost:4201/products';

  constructor(private http: HttpClient) { }

  getProduct(id: number): Observable<IProduct> {
    return this.http.get<IProduct>(`${this.API_URL}/${id}`);
  }

  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.API_URL)
  }

  removeProduct(id : number): Observable<IProduct> {
    return this.http.delete<IProduct>(`${this.API_URL}/${id}`)
  }

  addProduct(product: any) {
  }

  updateProduct() {

  }


}
