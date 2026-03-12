import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({ providedIn: 'root' })
export class ProdutosService {
  private apiUrl = 'http://localhost:8080/api/produtos';

  constructor(private http: HttpClient) {}

  listar(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }

  salvar(produto: Product): Observable<Product> {
    return this.http.post<Product>(this.apiUrl, produto);
  }

  excluir(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}