import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produtos } from '../models/produto';

@Injectable({ providedIn: 'root' })
export class ProdutosService {
  private apiUrl = 'http://localhost:8080/api/produtos';

  constructor(private http: HttpClient) {}

  listar(): Observable<Produtos[]> {
    return this.http.get<Produtos[]>(this.apiUrl);
  }

  salvar(produto: Produtos): Observable<Produtos> {
    return this.http.post<Produtos>(this.apiUrl, produto);
  }

  excluir(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}