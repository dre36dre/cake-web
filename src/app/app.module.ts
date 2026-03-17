import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // necessário para ngModel

import { App } from './app';
import { Pedidos } from './pages/pedidos/pedidos';

@NgModule({
  declarations: [
    App,
    Pedidos // declare aqui os componentes que você criou
  ],
  imports: [
    BrowserModule,
    FormsModule // importa para habilitar ngModel
  ],
  providers: [],
  bootstrap: [App] // componente raiz
})
export class AppModule {}