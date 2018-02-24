import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

/* Importamos Modulos */
import { CoreModule } from './modules/coreMod/core.module';

/* Importamos componentes que maneja este modulo */
import { ShellComponent } from './components/shellCmp/shell.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, CoreModule ],
  declarations: [ ],
  bootstrap:    [ ShellComponent ]
})
export class AppModule { }
