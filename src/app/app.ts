import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// 1. Importe os componentes que criados
import { CatalogComponent } from './features/catalog/catalog.component';
import { CartComponent } from './features/cart/cart.component';

@Component({
  selector: 'app-root',
  standalone: true,
  // 2. Adicione CatalogComponent e CartComponent aqui no array de imports
  imports: [RouterOutlet, CatalogComponent, CartComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('cake-web');
}
