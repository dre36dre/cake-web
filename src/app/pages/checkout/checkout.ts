import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CarrinhoService } from '../../services/carrinho.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './checkout.html',
  styleUrls: ['./checkout.css']
})
export class Checkout {
  nome = '';
  telefone = '';
  endereco = '';

constructor(
  public carrinho: CarrinhoService,
  private http: HttpClient
) {}

finalizarPedido() {
  const pedido = {
    itens: this.carrinho.itens().map(i => ({
      nome: i.produto.nome,
      qtd: i.qtd,
      preco: i.produto.preco
    })),
    total: this.carrinho.total(),
    cliente: {
      nome: this.nome,
      telefone: this.telefone,
      endereco: this.endereco
    }
  };

  this.http.post('http://localhost:8080/api/pedidos', pedido).subscribe(() => {
    const itens = this.carrinho.itens()
      .map(i => `${i.qtd}x ${i.produto.nome}`)
      .join(', ');

    const mensagem = `Olá, gostaria de confirmar meu pedido: ${itens}. 
Nome: ${this.nome}, Telefone: ${this.telefone}, Endereço: ${this.endereco}. 
Total: R$ ${this.carrinho.total()}`;

    const numeroLoja = '5511999999999'; // substitua pelo número real
    const url = `https://wa.me/${numeroLoja}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, '_blank');
  });
}
}