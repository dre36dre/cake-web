import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css']
})
export class Dashboard {
  totalProdutos = signal(12);
  totalPedidos = signal(34);
  pedidosPendentes = signal(5);
}