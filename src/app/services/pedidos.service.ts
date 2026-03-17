import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pedido } from '../models/pedido';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PedidosService {
  private apiUrl = 'http://localhost:8080/api/pedidos'; // ajuste conforme seu backend

  constructor(private http: HttpClient) {}

    listarPorCliente(clienteId: number): Observable<Pedido[]> {
    return this.http.get<Pedido[]>(`${this.apiUrl}/cliente/${clienteId}`);
  }


  listar(): Observable<Pedido[]> {
    return this.http.get<Pedido[]>(this.apiUrl);
  }

  salvar(pedido: Pedido): Observable<Pedido> {
    return this.http.post<Pedido>(this.apiUrl, pedido);
  }

  atualizar(pedido: Pedido): Observable<Pedido> {
    return this.http.put<Pedido>(`${this.apiUrl}/${pedido.id}`, pedido);
  }

  excluir(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}