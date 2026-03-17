// src/app/pages/pedidos/pedidos.ts
import { Component } from '@angular/core';
import { Pedido } from '../../models/pedido';

@Component({
  standalone: true,
  selector: 'app-pedidos',
  templateUrl: './pedidos.html',

})
export class Pedidos {
  pedidos: Pedido[] = [];

  novoPedido: Pedido = {
    id: 1,
    cliente: '',
    status: 'PENDENTE',
    itens: [],
    data: new Date(),
    total: 0
  };

  salvar() {
    // adiciona o pedido na lista
    this.pedidos.push({ ...this.novoPedido });

    // reseta o formulário
    this.novoPedido = {
      id: this.pedidos.length + 1,
      cliente: '',
      status: 'PENDENTE',
      itens: [],
      data: new Date(),
      total: 0
    };
  }

  excluir(id: number) {
    this.pedidos = this.pedidos.filter(p => p.id !== id);
  }
}