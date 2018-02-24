import { NgModule } from '@angular/core';
//import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

/* Impotamos componentes que maneja este modulo */
import { BlogComponent } from '../../components/blogCmp/blog.component';

import {RouterModule, Routes} from "@angular/router";
const routes: Routes = [
  {
    path: '',
    component: BlogComponent
  }
];

@NgModule({
  imports:      [ CommonModule, FormsModule, RouterModule.forChild(routes) ],
  declarations: [ BlogComponent ],
  exports:      [ ]
})
export class BlogModule { }
