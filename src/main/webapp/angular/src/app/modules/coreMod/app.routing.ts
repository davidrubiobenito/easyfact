
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from "@angular/router";

/*Importamos Componentes gestionados por el modulo*/
import { ShellComponent } from '../../components/shellCmp/shell.component';

const routes: Routes = [
  { path: '', loadChildren: './../home/home.module#HomeModule', pathMatch: 'full'},
  { path: 'blog', loadChildren: './../blog/blog.module#BlogModule' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, { enableTracing: true }) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
