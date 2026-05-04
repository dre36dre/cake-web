import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService, Product } from '../../cart.service';

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.css'
})
export class CatalogComponent {
  // Injeta o serviço do carrinho que criamos
  private cartService = inject(CartService);

  // Lista de produtos (Depois você poderá buscar isso da sua API)
  products: Product[] = [
    {
      id: 1,
      name: 'Bolo de Chocolate Belga',
      price: 65.00,
      image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400',
      quantity: 1
    },
    {
      id: 2,
      name: 'Red Velvet Especial',
      price: 85.00,
      image: 'https://images.unsplash.com/photo-1616541823729-00fe0aacd32c?w=400',
      quantity: 1
    },
    {
      id: 3,
      name: 'Bolo de Cenoura Gourmet',
      price: 45.00,
      image: 'https://images.unsplash.com/photo-1606312619070-d48b4c652a52?w=400',
      quantity: 1
    }
  ];

  // Método para adicionar ao carrinho
  addToCart(product: Product) {
    this.cartService.addToCart(product);
    // Opcional: Feedback visual
    alert(`${product.name} adicionado ao carrinho!`);
  }
}
