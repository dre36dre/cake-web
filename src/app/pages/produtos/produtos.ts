import { Component, signal } from '@angular/core';
import { ProdutosService } from '../../services/produtos.service'; // corrigido
import { Produto } from '../../models/produto';

import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-products',
  standalone: true,
 
  templateUrl: './produtos.html',
  styleUrls: ['./produtos.css']
})
export class Produto {
  produtos = signal<Produto[]>([]);
  novoProduto: Produto = {
    nome: '', preco: 0, descricao: '',
    id: 0
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
      this.novoProduto = { nome: '', preco: 0, descricao: '' };
    });
  }

  excluir(id: number) {
    this.service.excluir(id).subscribe(() => this.carregarProdutos());
  }
}