import { NgModule } from '@angular/core';
//import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

/* Impotamos componentes que maneja este modulo */
import { HomeComponent } from '../../components/homeCmp/home.component';
import { CarruselPerfilComponent } from '../../components/carruselPerfilCmp/carrusel-perfil.component';

import {RouterModule, Routes} from "@angular/router";
const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }
];

@NgModule({
  imports:      [ CommonModule, FormsModule, RouterModule.forChild(routes) ],
  declarations: [ HomeComponent, CarruselPerfilComponent ],
  exports:      [ ]
})
export class HomeModule { }
