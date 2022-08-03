import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/models/cart-item.model';
import { Cart } from 'src/app/models/cart.model';
import { CartUtil } from 'src/app/utils/cart.util';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html'
})
export class CartPageComponent implements OnInit {
  public cart: Cart = new Cart();

  constructor() { }

  ngOnInit(): void {
    this.loadCart();
  }

  public total() {
    let total = 0;

    this.cart.items.forEach((item) => {
      total += item.price * item.quantity;
    });

    return total;
  }

  public loadCart() {
    this.cart = CartUtil.get();
  }

  public remove(item: CartItem) {
    const index = this.cart.items.indexOf(item);
    this.cart.items.splice(index, 1);
    CartUtil.update(this.cart);
  }

  public removeOne(item: CartItem) {
    const index = this.cart.items.indexOf(item);
    this.cart.items[index].quantity--;

    if (this.cart.items[index].quantity < 1) {
      this.remove(item);
      return;
    }

    CartUtil.update(this.cart);
  }

  public clear() {
    CartUtil.clear();
    this.loadCart();
  }
}
