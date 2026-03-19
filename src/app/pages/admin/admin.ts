import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProdutosService } from '../../services/produtos.service';
import { Produto } from '../../models/produto';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './admin.html',
  styleUrls: ['./admin.css']
})
export class AdminPage {
  titulo = 'Área da Dona da Loja';

  produtos = signal<Produto[]>([]);
  nome = '';
  preco = 0;
  descricao = '';

  constructor(private produtoService: ProdutosService) {
    this.carregarProdutos();
  }

  carregarProdutos() {
    this.produtoService.listar().subscribe({
      next: (lista: Produto[]) => this.produtos.set(lista),
      error: () => this.produtos.set([])
    });
  }

  salvarProduto() {
    const novoProduto: Produto = {
      id: 0,
      nome: this.nome,
      preco: this.preco,
      descricao: this.descricao
    };

    this.produtoService.salvar(novoProduto).subscribe({
      next: () => {
        this.nome = '';
        this.preco = 0;
        this.descricao = '';
        this.carregarProdutos();
      }
    });
  }

  excluirProduto(id: number) {
    this.produtoService.excluir(id).subscribe({
      next: () => this.carregarProdutos()
    });
  }
}
