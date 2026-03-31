import { Component } from '@angular/core';
import { ProdutoService } from '../../../services/produtos.service';
import { Produto } from '../../../models/produto';

@Component({
  standalone: false,
  selector: 'app-produto-form',
  templateUrl: './produto-form.html',
  styleUrls: ['./produto-form.css']
})
export class ProdutoForm {
  produto: Produto = {
    name: '',
    description: '',
    price: 0,
    available: true
  };

  constructor(private produtoService: ProdutoService) {}

  salvar(): void {
    this.produtoService.create(this.produto).subscribe({
      next: (novo: Produto) => {
        console.log('Produto salvo com sucesso:', novo);
        alert('Produto cadastrado!');
        this.produto = { name: '', description: '', price: 0, available: true }; // limpa o formulário
      },
      error: (err: any) => console.error('Erro ao salvar produto', err)
    });
  }
}