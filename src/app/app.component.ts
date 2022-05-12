import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "abcxyz";
  productStatus: boolean = true;
  productList: { id: number, name: string, price: number, status: boolean }[] = [
    {
      id: 1,
      name: "Product A",
      price: 1000,
      status: true,
    },
    {
      id: 2,
      name: "Product B",
      price: 2000,
      status: false,
    }
  ]
  onHandleClick() {
    this.productStatus = !this.productStatus
  }
  onHandleDelete(idProduct: any){
    console.log(idProduct)
    this.productList = this.productList.filter(product => product.id !== idProduct);
  }
  onHandleKeyPress(event : any){
    console.log(event.target.value)
    this.title = event.target.value
  }
}
