import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdutosService } from '../../services/produtos.service'; // corrigido
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
  novoProduto: Produto = { id: 0,
    nome: '', preco: 0, descricao: ''
   
  };

  constructor(private service: ProdutosService) {
    this.carregarProdutos();
  }

  carregarProdutos() {
    this.service.listar().subscribe((lista: Produto[]) => this.produtos.set(lista));
  }

  salvar() {
    this.service.salvar(this.novoProduto).subscribe(() => {
      this.carregarProdutos();
      this.novoProduto = { id: 0,nome: '', preco: 0, descricao: '' };
    });
  }

  excluir(id: number) {
    this.service.excluir(id).subscribe(() => this.carregarProdutos());
  }
}