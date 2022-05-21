import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { AddComponent } from './pages/products/add/add.component';
import { TableProductComponent } from './pages/products/table-product/table-product.component';

const routes: Routes = [
  { path: "products", component: TableProductComponent },
  { path: "product/add", component: AddComponent },
  { path: "product/:id", component: ProductDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
