import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css'],
  //encapsulation: ViewEncapsulation.None  // Use to disable CSS Encapsulation for this component
})
export class MenuBarComponent {

  constructor() {}

   isIn : boolean = false;   // store state
   toggleState() { // click handler
       let bool : boolean = this.isIn;
       this.isIn = bool === false ? true : false;
   }

   pulsadoLink(params : String) {
     this.isIn = false;

     switch(params) {
       case 'about': {
         console.log('entro por: ', params);


         break;
       }
       default: {
         console.log('Entro por default');
         break;
       }
     }

   }


}
