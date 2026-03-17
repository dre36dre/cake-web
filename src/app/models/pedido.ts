// src/app/models/pedido.ts
export interface Item {
  produtoId: number;
  quantidade: number;
  preco: number;
}

export interface Pedido {
  id: number;
  cliente: string;
  produto: string;
  quantidade: number;
  status: 'PENDENTE' | 'CONCLUIDO';
  itens: Item[];
  data: Date;
  total?: number; // opcional, calculado a partir dos itens
}