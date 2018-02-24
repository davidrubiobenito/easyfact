import { Component, ViewEncapsulation  } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.css'],
  //encapsulation: ViewEncapsulation.None  // Use to disable CSS Encapsulation for this component
})
export class ShellComponent {
  title = 'app';
}
