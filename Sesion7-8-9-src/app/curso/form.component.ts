import { Component, OnInit } from '@angular/core';
import {Curso} from './curso'

import {Router, ActivatedRoute} from '@angular/router'
import swal from 'sweetalert2'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class FormComponent implements OnInit {

  curso: Curso = new Curso()
  titulo:string = "Crear curso"

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.cargarCurso()
  }

  cargarCurso(): void{
        
  }

  create(): void {
        swal.fire('Nuevo curso', `Curso  creado con éxito!`, 'success');
  }

  update():void{
      swal.fire('Curso Actualizado', `Curso  actualizado con éxito!`, 'success');
  }

}
