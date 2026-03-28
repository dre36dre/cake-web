import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin.html',
  styleUrls: ['./admin.css']
})
export class AdminPage {
  titulo = 'Área da Dona da Loja';

  // Exemplo de dados administrativos
  pedidosPendentes = 12;
  faturamentoHoje = 985.50;
}
