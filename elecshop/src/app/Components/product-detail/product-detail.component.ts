import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ShoppingCartService } from 'src/app/Services/shopping-cart.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  prod: any;
  item: any;


  constructor(public shopping_cart: ShoppingCartService,private router:Router) { }

  ngOnInit(): void {
    this.getShoppingCart()
  }


  getShoppingCart(){
   this.prod =  this.shopping_cart.get_selected_items();
   this.item = this.prod[this.prod.length - 1]
  }

  addToCart(){
    this.shopping_cart.addProduct(this.item)
    this.router.navigateByUrl('/checkout');
  }

}
