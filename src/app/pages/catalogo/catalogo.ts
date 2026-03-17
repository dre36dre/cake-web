import { Component, signal } from '@angular/core';

import { ProdutosService } from '../../services/produtos.service';
import { Produto } from '../../models/produto';

@Component({
  selector: 'app-catalogo',
  standalone: true,
  
  templateUrl: './catalogo.html',
  styleUrls: ['./catalogo.css']
})
export class Catalogo {
  produtos = signal<Produto[]>([]);
  filtro = signal('');
  carrinho = signal<Produto[]>([]);

  constructor(private service: ProdutosService) {
    this.carregarProdutos();
  }

  carregarProdutos() {
    this.service.listar().subscribe(lista => this.produtos.set(lista));
  }

  adicionar(produto: Produto) {
    this.carrinho.update(lista => [...lista, produto]);
  }

  get produtosFiltrados(): Produto[] {
    const termo = this.filtro().toLowerCase();
    return this.produtos().filter(p =>
      p.nome.toLowerCase().includes(termo)
    );
  }
}