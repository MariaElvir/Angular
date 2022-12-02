import { Component, OnInit } from '@angular/core';
import {CURSOS} from './curso.json'
import {Curso} from './curso'
import swal from 'sweetalert2'


@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {
  cursos?:Curso[]; 
  ngOnInit(): void {
    this.cursos = CURSOS;
  }

  delete(curso: Curso): void {
    swal.fire({
      title: 'Está seguro?',
      icon: 'warning',
      text: `¿Seguro que desea eliminar el curso ${curso.nombre}?`,
      showCloseButton: true,
      showCancelButton: true,
      focusConfirm: false,
      confirmButtonText: 'Si, eliminar!',
      cancelButtonText: 'No, cancelar!',
      buttonsStyling: false,
      reverseButtons: true
    }).then((result) => {

      if (result.value) {
        var x= this.cursos
        
            swal.fire(
              'Curso Eliminado!',
              `Curso ${curso.nombre} eliminado con éxito.`,
              'success'
            )

      }
    })
  }
}
