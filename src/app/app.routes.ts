import { Routes } from '@angular/router';
import { ProdutoList } from './pages/produtos/produto-list/produto-list';
import { ProdutoForm } from './pages/produtos/produto-form/produto-form';
import { ProdutoDetail } from './pages/produtos/produto-detail/produto-detail';
import { Login } from './auth/login/login';
import { AdminPage } from './pages/admin/admin';
import { ClientePage } from './pages/cliente/cliente';

export const routes: Routes = [
  { path: '', redirectTo: '/produtos', pathMatch: 'full' },
  { path: 'login', component: Login },
  { path: 'produtos', component: ProdutoList },
  { path: 'produtos/novo', component: ProdutoForm },
  { path: 'produtos/:id', component: ProdutoDetail },
  { path: 'admin', component: AdminPage },
  { path: 'cliente', component: ClientePage }
];