import { Component } from '@angular/core';

interface IRegisterForm {
  name: string;
  email: string;
  mensaje: string;
}

@Component({
  selector: 'app-mi-proyeto-template-form',
  templateUrl: './mi-proyeto-template-form.component.html',
  styleUrls: ['./mi-proyeto-template-form.component.css']
})
export class MiProyetoTemplateFormComponent {

  title = 'ActividaAsincrona';
  clickMessage="Correcto";
    register: IRegisterForm = {
      name: "",
      email: "",
      mensaje: "",
    };
    
    element = false;

    constructor() {}
    submit() {
      // Llegados a este punto, ya hemos podido validar todo excepto las contraseñas y ya recibimos los datos
      console.log("Datos de inicio de sesión");
      console.log(this.register.name);
      console.log(this.register.email);
      console.log(this.register.mensaje);
      
      this.element = true
    }
}
