import { Component, signal } from '@angular/core';
import { PedidosService } from '../../services/pedidos.service';
import { Pedido } from '../../models/pedido.model';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pedidos',
  standalone: true,
  imports: [NgFor, NgIf, FormsModule],
  templateUrl: './pedidos.html',
  styleUrls: ['./pedidos.css']
})
export class Pedidos {
  pedidos = signal<Pedido[]>([]);
  novoPedido: Pedido = { cliente: '', produto: '', quantidade: 1, status: 'PENDENTE' };

  constructor(private service: PedidosService) {
    this.carregarPedidos();
  }

  carregarPedidos() {
    this.service.listar().subscribe(lista => this.pedidos.set(lista));
  }

  salvar() {
    this.service.salvar(this.novoPedido).subscribe(() => {
      this.carregarPedidos();
      this.novoPedido = { cliente: '', produto: '', quantidade: 1, status: 'PENDENTE' };
    });
  }

  excluir(id: number) {
    this.service.excluir(id).subscribe(() => this.carregarPedidos());
  }
}