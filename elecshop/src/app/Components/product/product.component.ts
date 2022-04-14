import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import {ShoppingCartService} from '../../Services/shopping-cart.service'
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() products: any[] = [];

  constructor(private shopping_cart: ShoppingCartService, private router: Router) { }

  ngOnInit(): void {
  }

  addToCart(p:any){
    this.shopping_cart.addProduct(p)
  }

  productDetailPage(prod:any){
    this.shopping_cart.selectedProduct(prod);
    setTimeout(()=>{
      this.router.navigateByUrl('/product');
    },2000)
  }

}
