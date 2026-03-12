import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './shared/navbar/navbar'; // importa o Navbar

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Navbar], // adiciona Navbar nos imports
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('cake-web');
}