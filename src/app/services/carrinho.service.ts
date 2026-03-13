import { Injectable, signal } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({ providedIn: 'root' })
export class CarrinhoService {
  itens = signal<{ produto: Product, qtd: number }[]>([]);

  adicionar(produto: Product) {
    const lista = this.itens();
    const existente = lista.find(i => i.produto.id === produto.id);

    if (existente) {
      existente.qtd++;
      this.itens.set([...lista]);
    } else {
      this.itens.set([...lista, { produto, qtd: 1 }]);
    }
  }

  remover(produtoId: number) {
    this.itens.set(this.itens().filter(i => i.produto.id !== produtoId));
  }

  alterarQtd(produtoId: number, qtd: number) {
    this.itens.update(lista =>
      lista.map(i => i.produto.id === produtoId ? { ...i, qtd } : i)
    );
  }

  total(): number {
    return this.itens().reduce((soma, i) => soma + i.produto.preco * i.qtd, 0);
  }
}