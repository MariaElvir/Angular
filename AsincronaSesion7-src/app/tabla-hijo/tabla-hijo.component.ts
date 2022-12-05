import { Component, Input } from '@angular/core';

interface IRegisterForm2 {
  name1: string;
  dni1: string;
  estadoCivil1: string;
}

@Component({
  selector: 'app-tabla-hijo',
  templateUrl: './tabla-hijo.component.html',
  styleUrls: ['./tabla-hijo.component.css']
})
export class TablaHijoComponent {
  @Input() registrado: IRegisterForm2 = {
    name1: "",
    dni1: "",
    estadoCivil1: ""
  };

  
}
