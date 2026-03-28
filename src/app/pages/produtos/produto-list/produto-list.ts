// src/app/pages/produtos/produto-list/produto-list.ts
import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../../../services/produto.service';
import { Produto } from '../../../models/produto';

@Component({
  selector: 'app-produto-list',
  templateUrl: './produto-list.html',
  styleUrls: ['./produto-list.css']
})
export class ProdutoList implements OnInit {
  produtos: Produto[] = [];

  constructor(private produtoService: ProdutoService) {}

  ngOnInit(): void {
    this.produtoService.getAll().subscribe({
      next: (data) => this.produtos = data,
      error: (err) => console.error('Erro ao carregar produtos', err)
    });
  }
}