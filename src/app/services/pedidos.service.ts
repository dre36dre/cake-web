import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pedido } from '../models/pedido.model';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

const PEDIDOS_MOCK: Pedido[] = [
  { id: 1, cliente: 'João', status: 'PENDENTE', itens: [{ id: 1, nome: 'Bolo de Chocolate', qtd: 2, preco: 25 }], data: new Date(), total: 50 },
  { id: 2, cliente: 'Maria', status: 'CONCLUIDO', itens: [{ id: 2, nome: 'Torta de Morango', qtd: 1, preco: 30 }], data: new Date(), total: 30 }
];

@Injectable({ providedIn: 'root' })
export class PedidosService {
  private apiUrl = 'http://localhost:8080/api/pedidos'; // ajuste conforme seu backend

  constructor(private http: HttpClient) {}

  listarPorCliente(clienteId: number): Observable<Pedido[]> {
    return this.http.get<Pedido[]>(`${this.apiUrl}/cliente/${clienteId}`).pipe(
      catchError(() => of(PEDIDOS_MOCK.filter(p => p.id === clienteId)))
    );
  }

  listar(): Observable<Pedido[]> {
    return this.http.get<Pedido[]>(this.apiUrl).pipe(catchError(() => of(PEDIDOS_MOCK)));
  }

  salvar(pedido: Pedido): Observable<Pedido> {
    return this.http.post<Pedido>(this.apiUrl, pedido).pipe(catchError(() => of({ ...pedido, id: Date.now() })));
  }

  atualizar(pedido: Pedido): Observable<Pedido> {
    return this.http.put<Pedido>(`${this.apiUrl}/${pedido.id}`, pedido).pipe(catchError(() => of(pedido)));
  }

  excluir(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`).pipe(catchError(() => of(undefined as void)));
  }
}