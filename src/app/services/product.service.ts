import { Injectable } from '@angular/core';
import mockData from 'src/data';


@Injectable({
  providedIn: 'root'
})

export class ProductService {

  myName = "dungnvph17931";

  constructor() { }

  getProduct(id : number){
    return mockData.find(item => item.id == +id)
  }

  getProducts(){
    return mockData;
  }

  removeProduct(){

  }

  addProduct(product : any){
    return mockData.push(product)
  }

  updateProduct(){

  }
  

}
