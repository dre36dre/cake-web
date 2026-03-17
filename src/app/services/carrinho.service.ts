import { Injectable, signal } from '@angular/core';
import { Produtos } from '../models/produto';

@Injectable({ providedIn: 'root' })
export class CarrinhoService {
  itens = signal<{ produto: Produtos, qtd: number }[]>([]);

  adicionar(produto: Produtos) {
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