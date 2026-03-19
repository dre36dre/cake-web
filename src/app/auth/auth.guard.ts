import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  if (typeof window === 'undefined' || typeof localStorage === 'undefined') {
    // No browser storage during server-side rendering; allow route resolution to continue.
    return true;
  }

  const token = localStorage.getItem('token');
  const role = localStorage.getItem('role');

  if (!token) {
    router.navigate(['/login']);
    return false;
  }

  const requiredRole = route.data?.['requiredRole'] as string | undefined;
  if (requiredRole && role !== requiredRole) {
    // redireciona para área correta
    const redirect = role === 'admin' ? '/admin' : '/cliente';
    router.navigate([redirect]);
    return false;
  }

  return true;
};