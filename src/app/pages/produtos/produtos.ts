import { Component, signal } from '@angular/core';
import { ProdutosService } from '../../services/produtos.service'; // corrigido
import { Produtos } from '../../models/produto';

import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-products',
  standalone: true,
 
  templateUrl: './produtos.html',
  styleUrls: ['./produtos.css']
})
export class Produto {
  produtos = signal<Produtos[]>([]);
  novoProduto: Produtos = { id: 0,
    nome: '', preco: 0, descricao: ''
   
  };

  constructor(private service: ProdutosService) {
    this.carregarProdutos();
  }

  carregarProdutos() {
    this.service.listar().subscribe((lista: Produtos[]) => this.produtos.set(lista));
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