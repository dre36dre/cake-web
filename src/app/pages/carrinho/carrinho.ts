import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { CarrinhoService } from '../../services/carrinho.service';

@Component({
  selector: 'app-carrinho',
  standalone: true,
  imports: [NgFor],
  templateUrl: './carrinho.html',
  styleUrls: ['./carrinho.css']
})
export class Carrinho {
  constructor(public carrinho: CarrinhoService) {}
}