import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product.model';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ProductsService {
  private apiUrl = 'http://localhost:8080/api/produtos'; // ajuste conforme seu backend

  constructor(private http: HttpClient) {}

  listar(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }

  salvar(produto: Product): Observable<Product> {
    return this.http.post<Product>(this.apiUrl, produto);
  }

  atualizar(produto: Product): Observable<Product> {
    return this.http.put<Product>(`${this.apiUrl}/${produto.id}`, produto);
  }

  excluir(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}