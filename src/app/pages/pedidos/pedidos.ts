import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Pedido } from '../../models/pedido.model';
import { Item } from '../../models/item.model';

@Component({
  selector: 'app-pedidos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './pedidos.html'
})
export class PedidosComponent implements OnInit {
  pedidos: Pedido[] = [];
  novoPedido: Pedido = {
    cliente: '',
    status: 'PENDENTE',
    itens: [],
    data: new Date(),
    total: 0
  };

  ngOnInit() {
    // Exemplo inicial
    this.pedidos = [
      {
        id: 1,
        cliente: 'João',
        status: 'PENDENTE',
        itens: [
          { id: 1, nome: 'Bolo de Chocolate', qtd: 2, preco: 25 }
        ],
        data: new Date(),
        total: 50
      },
      {
        id: 2,
        cliente: 'Maria',
        status: 'CONCLUÍDO',
        itens: [
          { id: 2, nome: 'Torta de Morango', qtd: 1, preco: 30 }
        ],
        data: new Date(),
        total: 30
      }
    ];
  }

  salvar() {
    const novoId = this.pedidos.length > 0 ? Math.max(...this.pedidos.map(p => p.id ?? 0)) + 1 : 1;
    const pedido = { ...this.novoPedido, id: novoId };
    this.pedidos.push(pedido);

    // resetar formulário
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