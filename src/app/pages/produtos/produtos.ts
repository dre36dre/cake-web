import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdutoService } from '../../services/produtos.service';
import { Produto } from '../../models/produto';

import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './produtos.html',
  styleUrls: ['./produtos.css']
})
export class ProdutosComponent {
  produtos = signal<Produto[]>([]);
  novoProduto: Produto = {
    name: '',
    description: '',
    price: 0,
    available: true
  };

  constructor(private service: ProdutoService) {
    this.carregarProdutos();
  }

  carregarProdutos() {
    this.service.listar().subscribe((lista: Produto[]) => this.produtos.set(lista));
  }

  salvar() {
    this.service.salvar(this.novoProduto).subscribe(() => {
      this.carregarProdutos();
      this.novoProduto = {
        name: '',
        description: '',
        price: 0,
        available: true
      };
    });
  }

  excluir(id: number) {
    this.service.excluir(id).subscribe(() => this.carregarProdutos());
  }
}