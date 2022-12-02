import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AalumnoComponent } from './aalumno/aalumno.component';
import { FormAlumnoComponent } from './aalumno/formAlumno.component';
import { CursoComponent } from './curso/curso.component';
import { FormComponent } from './curso/form.component';
import { DatosComponent } from './datos/datos.component';
import { EscuelamainComponent } from './escuelamain/escuelamain.component';
import { UsuariosComponent } from './usuarios/usuarios.component';

//definir rutas
const routes: Routes = [
  {path: '', redirectTo: '/escuelamain', pathMatch: 'full'},
  {path: 'escuelamain', component: EscuelamainComponent},
  {path: 'cursos', component: CursoComponent},
  {path: 'cursos/form', component: FormComponent},
  {path: 'cursos/form/:id', component: FormComponent},
  {path: 'alumno', component: AalumnoComponent},
  {path: 'alumno/form', component: FormAlumnoComponent},
  {path: 'alumno/form/:id', component: FormAlumnoComponent},
  {path: 'usuario', component: UsuariosComponent},
  {path: 'datos', component: DatosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }