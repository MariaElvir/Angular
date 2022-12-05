import { Component } from '@angular/core';

interface IRegisterForm {
  name: string;
  dni: string;
  estadoCivil: string;
}


@Component({
  selector: 'app-mis-proyectos',
  templateUrl: './mis-proyectos.component.html',
  styleUrls: ['./mis-proyectos.component.css']
})

export class MisProyectosComponent{
  
    register: IRegisterForm = {
      name: "",
      dni: "",
      estadoCivil: ""
    };
        
    constructor() {}
    submit() {
      // [registrado]="register"
      // Llegados a este punto, ya hemos podido validar todo excepto las contraseñas y ya recibimos los datos
      console.log("Datos de inicio de sesión");
      console.log(this.register.name);
      console.log(this.register.dni);
      console.log(this.register.estadoCivil);
  }
  }
  