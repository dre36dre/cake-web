import { HttpInterceptorFn } from '@angular/common/http';

export const jwtInterceptor: HttpInterceptorFn = (req, next) => {
  const token = (typeof window !== 'undefined' && typeof localStorage !== 'undefined')
    ? localStorage.getItem('token')
    : null;

  if (token) {
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}` // adiciona o header Authorization
      }
    });
  }

  return next(req); // segue a requisição normalmente
};