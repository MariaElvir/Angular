import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import Swal from "sweetalert2";
import { Alumnos } from "./aalumno";

@Component({
    selector: 'app-formAlumno',
    templateUrl: './formAlumno.component.html'
  })
  export class FormAlumnoComponent implements OnInit {
  
    alumno: Alumnos = new Alumnos()
    titulo:string = "Crear Alumno"
  
    constructor(private router: Router, private activatedRoute: ActivatedRoute) { }
  
    ngOnInit() {
      this.cargarAlumno()
    }
  
    cargarAlumno(): void{
          
    }
  
    create(): void {
          Swal.fire('Nuevo alumno', `Alumno  creado con éxito!`, 'success');
    }
  
    update():void{
        Swal.fire('Alumno Actualizado', `Alumno  actualizado con éxito!`, 'success');
    }
  
  }
  