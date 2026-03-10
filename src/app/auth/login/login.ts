import { Component } from '@angular/core';
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

  constructor(private authService: AuthService){}

  onSubmit(): void {
    this.authService.login(this.email, this.password).subscribe({
      next: (response: AuthResponse) => {

        const token = response.token;

        if (!token) {
          console.error('Token não encontrado');
          return;
        }

        localStorage.setItem('token', token);
        console.log("Login realizado");

      },
      error: (err: any) => console.error(err)
    });
  }

}