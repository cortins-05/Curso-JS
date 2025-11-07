import { Component } from '@angular/core';

@Component({
  selector: 'app-prueba-lucas',
  imports: [],
  templateUrl: './prueba-lucas.html',
  styleUrl: './prueba-lucas.css',
})
export class PruebaLucas {
  mensaje: string='Esto es raro';
  locura() {
    this.mensaje = 'Puedo cambiar el valor al toque'
  }
}
