import { Item } from './item.model';

export interface Pedido {
  id?: number;        // opcional, gerado pelo backend
  cliente: string;
  status: string;
  itens: Item[];
  data: Date;
  total: number;
}