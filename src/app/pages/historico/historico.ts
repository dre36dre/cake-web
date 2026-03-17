import { Component, signal } from '@angular/core';
import { NgFor } from '@angular/common';
import { PedidosService } from '../../services/pedidos.service';
import { Pedido } from '../../models/pedido';

@Component({
  selector: 'app-historico',
  standalone: true,
  imports: [NgFor],
  templateUrl: './historico.html',
  styleUrls: ['./historico.css']
})
export class Historico {
  pedidos = signal<Pedido[]>([]);

  constructor(private service: PedidosService) {
    // Aqui você pode pegar o ID do cliente logado (ex: via token JWT)
    const clienteId = 1; 
    this.service.listarPorCliente(clienteId).subscribe(lista => this.pedidos.set(lista));
  }
}