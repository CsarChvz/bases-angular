import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
})
export class HeroeComponent {
  nombre: string = 'Ironman';
  edad: number = 45;
  obtenerNombre(): string {
    return `${this.nombre} - ${this.edad}`;
  }
  //   Cómo es una clase, se puede crear metodos como get y set

  //   En este caso se crea un metodo get que retorna el nombre en mayusculas
  get nombreCapitalizado(): string {
    return this.nombre.toUpperCase();
  }

  // --------------------------------
  cambiarNombre(): void {
    this.nombre = 'Spiderman';
  }
  cambiarEdad(): void {
    this.edad = 30;
  }
}
