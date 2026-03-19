import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cliente',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cliente.html',
  styleUrls: ['./cliente.css']
})
export class ClientePage {
  nome = 'Cliente';
  mensagem = 'Bem-vindo ao painel do cliente!';
}
