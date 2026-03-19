import { Routes } from '@angular/router';
import { authGuard } from './auth/auth.guard';
import { Dashboard } from './pages/dashboard/dashboard';
import { ProdutosComponent } from './pages/produtos/produtos';
import { PedidosComponent } from './pages/pedidos/pedidos';
import { AdminPage } from './pages/admin/admin';
import { ClientePage } from './pages/cliente/cliente';
import { Login } from './auth/login/login';
import { Catalogo } from './pages/catalogo/catalogo';
import { Carrinho } from './pages/carrinho/carrinho';
import { Checkout } from './pages/checkout/checkout';
import { Historico } from './pages/historico/historico';





export const routes: Routes = [
  { path: 'historico', component: Historico },
  { path: 'checkout', component: Checkout },
  { path: 'carrinho', component: Carrinho },
  { path: '', component: Catalogo },
  { path: 'login', component: Login },
  { path: 'dashboard', component: Dashboard },
  { path: 'admin', component: AdminPage, canActivate: [authGuard], data: { requiredRole: 'admin' } },
  { path: 'cliente', component: ClientePage, canActivate: [authGuard], data: { requiredRole: 'cliente' } },
  { path: 'produtos', component: ProdutosComponent, canActivate: [authGuard], data: { requiredRole: 'admin' } },
  { path: 'pedidos', component: PedidosComponent, canActivate: [authGuard], data: { requiredRole: 'admin' } },
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];
