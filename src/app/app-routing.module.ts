import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableProductComponent } from './pages/products/table-product/table-product.component';

const routes: Routes = [
  {path: "products", component: TableProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
