import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { AddComponent } from './pages/products/add/add.component';
import { TableProductComponent } from './pages/products/table-product/table-product.component';
import { AdminGuard } from './services/admin.guard';

const routes: Routes = [
  { path: "signin", component: SignInComponent },
  { path: "signup", component: SignUpComponent },
  {
    path: "products",canActivate: [AdminGuard], children: [
      { path: "", redirectTo: 'list', pathMatch: 'full' },
      { path: "list", component: TableProductComponent },
      { path: "add", component: AddComponent },
      { path: "edit/:id", component: AddComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
