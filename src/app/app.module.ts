import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableProductComponent } from './pages/products/table-product/table-product.component';
import { HeaderComponent } from './components/header/header.component';
import { AddComponent } from './pages/products/add/add.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { HelloComponent } from './components/hello/hello.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
@NgModule({
  declarations: [
    AppComponent,
    TableProductComponent,
    HeaderComponent,
    AddComponent,
    FooterComponent,
    HelloComponent,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
