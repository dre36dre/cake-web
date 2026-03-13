import { Routes } from '@angular/router';
import { authGuard } from './auth/auth.guard';
import { Dashboard } from './pages/dashboard/dashboard';
import { Products } from './pages/produtos/produtos';
import { Pedidos } from './pages/pedidos/pedidos';
import { Login } from './auth/login/login';
import { Catalogo } from './pages/catalogo/catalogo';
import { Carrinho } from './pages/carrinho/carrinho';



export const routes: Routes = [
  { path: 'carrinho', component: Carrinho },
  { path: '', component: Catalogo },
  { path: 'login', component: Login },
  { path: 'dashboard', component: Dashboard },
  { path: 'produtos', component: Products, canActivate: [authGuard] },
  { path: 'pedidos', component: Pedidos, canActivate: [authGuard] },
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];


