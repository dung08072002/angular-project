import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { AddComponent } from './pages/products/add/add.component';
import { EditProductComponent } from './pages/products/edit-product/edit-product.component';
import { TableProductComponent } from './pages/products/table-product/table-product.component';

const routes: Routes = [
  { path: "products", component: TableProductComponent },
  { path: "product/add", component: AddComponent },
  { path: "product/:id", component: ProductDetailComponent },
  { path: "product/edit/:id", component: AddComponent},
  { path: "signin", component: SignInComponent},
  { path: "signup", component: SignUpComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
