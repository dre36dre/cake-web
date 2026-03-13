import { Component, signal } from '@angular/core';
import { NgFor, FormsModule } from '@angular/common';
import { ProdutosService } from '../../services/produtos.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-catalogo',
  standalone: true,
  imports: [NgFor, FormsModule],
  templateUrl: './catalogo.html',
  styleUrls: ['./catalogo.css']
})
export class Catalogo {
  produtos = signal<Product[]>([]);
  filtro = signal('');
  carrinho = signal<Product[]>([]);

  constructor(private service: ProdutosService) {
    this.carregarProdutos();
  }

  carregarProdutos() {
    this.service.listar().subscribe(lista => this.produtos.set(lista));
  }

  adicionar(produto: Product) {
    this.carrinho.update(lista => [...lista, produto]);
  }

  get produtosFiltrados(): Product[] {
    const termo = this.filtro().toLowerCase();
    return this.produtos().filter(p =>
      p.nome.toLowerCase().includes(termo)
    );
  }
}