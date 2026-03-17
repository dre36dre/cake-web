// src/app/pages/pedidos/pedidos.ts
import { Component } from '@angular/core';
import { Pedido } from '../../models/pedido';
import { Pedido } from '../../models/pedido.model';

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
    total: 0,
    produto: '',
    quantidade: 0
  };

  salvar() {
    // adiciona o pedido na lista
    this.pedidos.push({ ...this.novoPedido });

    // reseta o formulário
    this.novoPedido = {
      
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