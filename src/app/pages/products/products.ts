import { Component, signal } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../models/product.model';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [NgFor, NgIf, FormsModule],
  templateUrl: './products.html',
  styleUrls: ['./products.css']
})
export class Products {
  produtos = signal<Product[]>([]);
  novoProduto: Product = { nome: '', preco: 0, descricao: '' };

  constructor(private service: ProductsService) {
    this.carregarProdutos();
  }

  carregarProdutos() {
    this.service.listar().subscribe(lista => this.produtos.set(lista));
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