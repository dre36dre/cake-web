import { Routes } from '@angular/router';
import { ProdutoList } from './pages/produtos/produto-list/produto-list';
import { ProdutoForm } from './pages/produtos/produto-form/produto-form';
import { ProdutoDetail } from './pages/produtos/produto-detail/produto-detail';

export const routes: Routes = [
  { path: '', redirectTo: '/produtos', pathMatch: 'full' },
  { path: 'produtos', component: ProdutoList },
  { path: 'produtos/novo', component: ProdutoForm },
  { path: 'produtos/:id', component: ProdutoDetail }
];