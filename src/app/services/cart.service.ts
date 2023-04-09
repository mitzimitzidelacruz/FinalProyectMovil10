import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartItem } from '../models/cart-item.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private items$ = new BehaviorSubject<CartItem[]>([
    {
      id: 1,
      name: 'Enchiladas',
      price: 35,
      image: 'assets/images/foods/enchiladas.png',
      quantity: 1,
    },{
      id: 4,
      name: 'Quesadillas',
      price: 20,
      image: 'assets/images/foods/quesadillas.png',
      quantity: 1,
    },
    {
      id: 5,
      name: 'Pozole',
      price: 80,
      image: 'assets/images/foods/pozole.png',
      quantity: 1,
    },
    {
      id: 7,
      name: 'Huevos',
      price: 40,
      image: 'assets/images/foods/huevo.png',
      quantity: 1,
    },
  ]);

  getCart() {
    return this.items$.asObservable();
  }

  addToCart(newItem: CartItem) {
    this.items$.next([...this.items$.getValue(), newItem]);
  }

  removeItem(id: number) {
    this.items$.next(this.items$.getValue().filter((item) => item.id !== id));
  }

  changeQty(quantity: number, id: number) {
    const items = this.items$.getValue();
    const index = items.findIndex((item) => item.id === id);
    items[index].quantity += quantity;
    this.items$.next(items);
  }

  getTotalAmount() {
    return this.items$.pipe(
      map((items) => {
        let total = 0;
        items.forEach((item) => {
          total += item.quantity * item.price;
        });

        return total;
      })
    );
  }
}
