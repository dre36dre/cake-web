import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const token = localStorage.getItem('token');
  const router = new Router();

  if (token) {
    // Se existe token, permite acesso
    return true;
  } else {
    // Se não existe token, redireciona para login
    router.navigate(['/login']);
    return false;
  }
};