import { Component } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent {

  cajaPadre: string ="";

  constructor() { }

  agregar(){
    this.cajaPadre="";
  }
  

}