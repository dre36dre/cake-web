import { HttpInterceptorFn } from '@angular/common/http';

export const jwtInterceptor: HttpInterceptorFn = (req, next) => {
  const token = localStorage.getItem('token'); // pega o token salvo no localStorage
  if (token) {
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}` // adiciona o header Authorization
      }
    });
  }
  return next(req); // segue a requisição normalmente
};