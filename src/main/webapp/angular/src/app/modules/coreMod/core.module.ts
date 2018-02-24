import { NgModule } from '@angular/core';
//import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Importamos el modulo de las Rutas
import { AppRoutingModule } from './../app.routing';
/* Importamos Modulos gestionados por el módulo */
import { MenuBarModule } from './../../modules/menuBarMod/menu-bar.module';

/* Impotamos componentes que maneja este modulo */
import { ShellComponent } from '../../components/shellCmp/shell.component';


@NgModule({
  imports:      [ AppRoutingModule, CommonModule, FormsModule , MenuBarModule],
  declarations: [ ShellComponent, ],
  exports:      [ ShellComponent, ]
})
export class CoreModule { }
