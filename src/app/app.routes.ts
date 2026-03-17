import { Routes } from '@angular/router';
import { authGuard } from './auth/auth.guard';
import { Dashboard } from './pages/dashboard/dashboard';
import { Produto } from './pages/produtos/produtos';
import { Pedidos } from './pages/pedidos/pedidos';
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
  { path: 'produtos', component: Produto, canActivate: [authGuard] },
  { path: 'pedidos', component: Pedidos, canActivate: [authGuard] },
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];
