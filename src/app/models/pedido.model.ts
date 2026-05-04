import { Item } from './item.model';

export interface Pedido {
  id?: number;
  cliente: string;
  status: string;
  itens: Item[];
  data: Date;
  total: number;
}