import { NgModule } from '@angular/core';
//import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Importamos el modulo de las Rutas
import { AppRoutingModule } from './../app.routing';

/* Impotamos componentes que maneja este modulo */
import { MenuBarComponent } from '../../components/menuBarCmp/menu-bar.component';

@NgModule({
  imports:      [ AppRoutingModule, CommonModule, FormsModule, ],
  declarations: [ MenuBarComponent ],
  exports:      [ MenuBarComponent ]
})
export class MenuBarModule {
}
