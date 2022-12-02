import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Alumnos } from './aalumno';
import { ALUMNOS } from './aalumno.json';

@Component({
  selector: 'app-aalumno',
  templateUrl: './aalumno.component.html',
  styleUrls: ['./aalumno.component.css']
})
export class AalumnoComponent implements OnInit {
  alumnos?:Alumnos[]; 
  ngOnInit(): void {
    this.alumnos = ALUMNOS;
  }

  delete(alumnos: Alumnos): void {
    Swal.fire({
      title: 'Está seguro?',
      icon: 'warning',
      text: `¿Seguro que desea eliminar al alumno ${alumnos.nombre}?`,
      showCloseButton: true,
      showCancelButton: true,
      focusConfirm: false,
      confirmButtonText: 'Si, eliminar!',
      cancelButtonText: 'No, cancelar!',
      buttonsStyling: false,
      reverseButtons: true
    }).then((result) => {

      if (result.value) {
        var x= this.alumnos
        
            Swal.fire(
              'Curso Eliminado!',
              `Curso ${alumnos.nombre} eliminado con éxito.`,
              'success'
            )

      }
    })
  }
}
