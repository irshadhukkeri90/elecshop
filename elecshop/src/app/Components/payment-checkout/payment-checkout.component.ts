import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShoppingCartService } from 'src/app/Services/shopping-cart.service';

@Component({
  selector: 'app-payment-checkout',
  templateUrl: './payment-checkout.component.html',
  styleUrls: ['./payment-checkout.component.scss']
})
export class PaymentCheckoutComponent implements OnInit {

  items: any = [];
  successfullPayment: boolean = false;


  constructor(public shopping_cart: ShoppingCartService, private router: Router) { }

  ngOnInit(): void {
    this.getShoppingCart()
  }


  getShoppingCart(){
   this.items =  this.shopping_cart.get_shopping_cart_items();
  }

  paymentSubmit(){
    // console.log("Clicked");

    this.successfullPayment = true;

    setTimeout(()=>{
      this.router.navigateByUrl('/');
    },2000)
  }


}
