import { Routes } from '@angular/router';
import { authGuard } from './auth/auth.guard';
import { Dashboard } from './pages/dashboard/dashboard';
import { Products } from './pages/products/products.';
import { Orders } from './pages/orders/orders';
import { Auth } from './auth/login/login';

export const routes: Routes = [
  { path: 'login', component: Auth },
  { path: 'dashboard', component: Dashboard },
  { path: 'products', component: Products, canActivate: [authGuard] },
  { path: 'orders', component: Orders, canActivate: [authGuard] },
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];


