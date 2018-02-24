import { NgModule } from '@angular/core';
//import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

/* Impotamos componentes que maneja este modulo */
import { ShellComponent } from '../../components/shellCmp/shell.component';
import { MenuBarComponent } from '../../components/menuBarCmp/menu-bar.component';


import {RouterModule , Routes} from "@angular/router";
const routes: Routes = [
  {
    path: '',
    loadChildren: './../homeMod/home.module#HomeModule'
  },
  {
    path: 'blog',
    loadChildren: './../blogMod/blog.module#BlogModule'
  }
];


@NgModule({
  imports:      [ CommonModule, FormsModule, RouterModule.forRoot(routes), ],
  declarations: [ ShellComponent, MenuBarComponent],
  exports:      [ ShellComponent,  ]
})
export class CoreModule { }
