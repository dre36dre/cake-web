import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../../cart.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  // Injetamos o serviço para ter acesso aos Signals (items, total, count)
  public cartService = inject(CartService);

  // Função para aumentar quantidade (+1)
  increaseQty(id: number) {
    this.cartService.updateQuantity(id, 1);
  }

  // Função para diminuir quantidade (-1)
  decreaseQty(id: number) {
    this.cartService.updateQuantity(id, -1);
  }

  // Função para remover item
  removeItem(id: number) {
    this.cartService.removeFromCart(id);
  }

  // Função que simula a finalização (Pode ser um link para WhatsApp)
  checkout() {
    const message = `Olá! Gostaria de encomendar esses bolos: Total ${this.cartService.total()}`;
    console.log(message);
    alert('Pedido enviado para processamento!');
  }
}