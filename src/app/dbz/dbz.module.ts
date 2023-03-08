import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page/main-page.component';

@NgModule({
  declarations: [MainPageComponent],
  // Se exportar para poder usarlo fuera del modulo de dbz - En este caso en app.module.ts
  // Aunque se importe el moduilo en app.module.ts, no se puede usar el componente MainPageComponent
  // porque no se ha exportado- Es como decir que solo esta localmente en dbz module
  exports: [MainPageComponent],
  imports: [CommonModule],
})
export class DbzModule {}
