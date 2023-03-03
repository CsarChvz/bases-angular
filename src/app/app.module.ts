import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeroesModule } from './heroes/heroes.module';

@NgModule({
  // Cuando se crea un componente, se debe agregar a declarations o a un modulo
  declarations: [AppComponent],
  imports: [BrowserModule, BrowserAnimationsModule, HeroesModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
