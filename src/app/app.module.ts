import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableProductComponent } from './pages/products/table-product/table-product.component';
import { HeaderComponent } from './components/header/header.component';
import { AddComponent } from './pages/products/add/add.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    TableProductComponent,
    HeaderComponent,
    AddComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
