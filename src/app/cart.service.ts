import { Injectable, signal, computed } from '@angular/core';
export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
}
@Injectable({
  providedIn: 'root'
})
export class CartService {
  // Usando Signals 
  private cartItems = signal<Product[]>([]);
  // Selectors
  items = computed(() => this.cartItems());
  total = computed(() => this.cartItems().reduce((acc, item) => acc + (item.price * item.quantity), 0));
  count = computed(() => this.cartItems().reduce((acc, item) => acc + item.quantity, 0));
  addToCart(product: any) {
    this.cartItems.update(prev => {
      const existing = prev.find(p => p.id === product.id);
      if (existing) {
        return prev.map(p => p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p);
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  }
  removeFromCart(id: number) {
    this.cartItems.update(prev => prev.filter(p => p.id !== id));
  }
  updateQuantity(id: number, delta: number) {
    this.cartItems.update(prev => prev.map(p => {
      if (p.id === id) {
        const newQty = p.quantity + delta;
        return { ...p, quantity: newQty > 0 ? newQty : 1 };
      }
      return p;
    }));
  }
  clearCart() {
    this.cartItems.set([]);
  }
}