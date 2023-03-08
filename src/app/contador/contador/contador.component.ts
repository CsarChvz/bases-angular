import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  template: `
    <h1>{{ title }}</h1>
    <h3>
      La base es: <strong>{{ base }}</strong>
    </h3>
    <button (click)="acumular(-base)">-{{ base }}</button>
    <span>{{ numero }}</span>
    <button (click)="acumular(base)">+{{ base }}</button>
  `,
})
export class contadorComponent {
  title = 'Contador App';
  numero: number = 10;
  base: number = 5;
  // Estos metoodos se pueden usar en el template
  acumular(numero: number) {
    this.numero += numero;
  }
}
