import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent {
  @Input() micontador: number=0;
  @Output() reinicio = new EventEmitter<number>();

  constructor() { }

  reiniciar(){
    this.micontador = 0;
    this.reinicio.emit(this.micontador);
  }

}

