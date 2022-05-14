import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-product',
  templateUrl: './table-product.component.html',
  styleUrls: ['./table-product.component.css']
})
export class TableProductComponent implements OnInit {

  @Input() data : any

  constructor() { }

  ngOnInit(): void {
  }

}
