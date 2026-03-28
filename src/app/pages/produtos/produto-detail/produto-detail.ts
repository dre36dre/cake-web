import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProdutoService } from '../../../services/produto.service';
import { Produto } from '../../../models/produto';

@Component({
  selector: 'app-produto-detail',
  templateUrl: './produto-detail.html',
  styleUrls: ['./produto-detail.css']
})
export class ProdutoDetail implements OnInit {
  produto?: Produto;

  constructor(
    private route: ActivatedRoute,
    private produtoService: ProdutoService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.produtoService.getAll().subscribe({
        next: (produtos) => {
          this.produto = produtos.find(p => p.id === +id);
        },
        error: (err) => console.error('Erro ao carregar produto', err)
      });
    }
  }
}