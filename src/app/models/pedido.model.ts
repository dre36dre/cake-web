export interface Pedido {
  id?: number;
   itens: { nome: string; qtd: number; preco: number }[];
  cliente: string;
  produto: string;
  quantidade: number;
   status: 'PENDENTE' | 'EM_PREPARO' | 'ENTREGUE';// "PENDENTE" ou "CONCLUÍDO"
  data: string;
  }