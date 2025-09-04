import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MisRutas } from "./mis-rutas/mis-rutas.component";
import { HomeLogo } from "./home-logo/home-logo.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MisRutas, HomeLogo],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('mi-primer-angular');
}
