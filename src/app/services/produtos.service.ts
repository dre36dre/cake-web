import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Produto } from '../models/produto';

const PRODUTOS_MOCK: Produto[] = [
  { id: 1, nome: 'Bolo de Chocolate', preco: 25, descricao: 'Bolo saboroso' },
  { id: 2, nome: 'Torta de Morango', preco: 30, descricao: 'Torta cremosa' }
];

@Injectable({ providedIn: 'root' })
export class ProdutosService {
  private apiUrl = 'http://localhost:8080/api/produtos';

  constructor(private http: HttpClient) {}

  listar(): Observable<Produto[]> {
    return this.http.get<Produto[]>(this.apiUrl)
      .pipe(catchError(() => of(PRODUTOS_MOCK)));
  }

  salvar(produto: Produto): Observable<Produto> {
    return this.http.post<Produto>(this.apiUrl, produto).pipe(
      catchError(() => of({ ...produto, id: Date.now() }))
    );
  }

  excluir(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`).pipe(
      catchError(() => of(undefined as void))
    );
  }
}