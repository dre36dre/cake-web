import { Component } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, NgIf], // precisa estar aqui
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css']
})

export class Navbar {
  menuAberto = false;

  constructor(private router: Router) {}

  toggleMenu() {
    this.menuAberto = !this.menuAberto;
  }

get logado(): boolean {
  if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
    return !!localStorage.getItem('token');
  }
  return false;
}
  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}