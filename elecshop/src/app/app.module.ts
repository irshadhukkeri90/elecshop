import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { ProductComponent } from './Components/product/product.component';
import { CheckoutComponent } from './Components/checkout/checkout.component';
import { CheckoutProductComponent } from './Components/checkout-product/checkout-product.component';
import { CheckoutSubtotalComponent } from './Components/checkout-subtotal/checkout-subtotal.component';
import { HomeComponent } from './Components/home/home.component';
import { NotFoundPageComponent } from './Components/not-found-page/not-found-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import { PaymentCheckoutComponent } from './Components/payment-checkout/payment-checkout.component';
import { ProductDetailComponent } from './Components/product-detail/product-detail.component';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProductComponent,
    CheckoutComponent,
    CheckoutProductComponent,
    CheckoutSubtotalComponent,
    HomeComponent,
    NotFoundPageComponent,
    PaymentCheckoutComponent,
    ProductDetailComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatCardModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
