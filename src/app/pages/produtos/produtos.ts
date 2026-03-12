import { Component, signal } from '@angular/core';
import { ProdutosService } from '../../services/produtos.service'; // corrigido
import { Product } from '../../models/product.model';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [NgFor, NgIf, FormsModule],
  templateUrl: './produtos.html',
  styleUrls: ['./produtos.css']
})
export class Products {
  produtos = signal<Product[]>([]);
  novoProduto: Product = { nome: '', preco: 0, descricao: '' };

  constructor(private service: ProdutosService) {
    this.carregarProdutos();
  }

  carregarProdutos() {
    this.service.listar().subscribe((lista: Product[]) => this.produtos.set(lista));
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