import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { AuthResponse } from '../../models/auth-response';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.html'
})
export class Login {

  email = '';
  password = '';

  constructor(private authService: AuthService, private router: Router){}

  onSubmit(): void {
    this.authService.login(this.email, this.password).subscribe({
      next: (response: AuthResponse) => {

        const token = response.token;
        const role = response.role ?? 'cliente';

        if (!token) {
          console.error('Token não encontrado');
          return;
        }

        if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
          localStorage.setItem('token', token);
          localStorage.setItem('role', role);
        }

        const redirect = role === 'admin' ? '/admin' : '/cliente';
        this.router.navigate([redirect]);

      },
      error: (err: any) => console.error(err)
    });
  }


  

}