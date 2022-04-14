import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from 'src/app/Services/shopping-cart.service';

@Component({
  selector: 'app-checkout-subtotal',
  templateUrl: './checkout-subtotal.component.html',
  styleUrls: ['./checkout-subtotal.component.scss']
})
export class CheckoutSubtotalComponent implements OnInit {

  items: any = [];

  constructor(public shoppingCart: ShoppingCartService) { }

  ngOnInit(): void {
    this.getShoppingCart()
  }


  getShoppingCart(){
   this.items =  this.shoppingCart.get_shopping_cart_items();
  }

}
