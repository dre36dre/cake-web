// src/app/pages/carrinho/carrinho.ts
import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ItemCarrinho } from '../../models/item-carrinho';

@Component({
  standalone: true,
  selector: 'app-carrinho',
  templateUrl: './carrinho.html',
  imports: [NgFor, FormsModule]
})
export class Carrinho {
  itens: ItemCarrinho[] = [];

  alterarQtd(produtoId: number, novaQtd: number) {
    const item = this.itens.find(i => i.produto.id === produtoId);
    if (item) {
      item.quantidade = novaQtd;
    }
  }

  remover(produtoId: number) {
    this.itens = this.itens.filter(i => i.produto.id !== produtoId);
  }

  calcularTotal(): number {
    return this.itens.reduce((acc, i) => acc + i.produto.preco * i.quantidade, 0);
  }
}