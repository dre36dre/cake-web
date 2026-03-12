import { Routes } from '@angular/router';
import { authGuard } from './auth/auth.guard';
import { Dashboard } from './pages/dashboard/dashboard';
import { Products } from './pages/produtos/produtos';
import { Pedidos } from './pages/pedidos/pedidos';
import { Login } from './auth/login/login';

export const routes: Routes = [
  { path: 'login', component: Login },
  { path: 'dashboard', component: Dashboard },
  { path: 'produtos', component: Products, canActivate: [authGuard] },
  { path: 'pedidos', component: Pedidos, canActivate: [authGuard] },
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];


