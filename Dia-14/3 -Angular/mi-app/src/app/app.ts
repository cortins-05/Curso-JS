import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Saludador } from "./saludador/saludador";
import { PruebaLucas } from "./prueba-lucas/prueba-lucas";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Saludador, PruebaLucas],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('mi-app');
}
