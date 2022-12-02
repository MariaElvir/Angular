import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//modulo de rutas
import { AppRoutingModule } from './app-routing.module';
//componentes personalizados
import { AppComponent } from './app.component';
import { PieComponent } from './pie/pie.component';
import { CursoComponent } from './curso/curso.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { AalumnoComponent } from './aalumno/aalumno.component';
import { EscuelamainComponent } from './escuelamain/escuelamain.component';
//componente de formulario
import { FormComponent } from './curso/form.component';
import { FormAlumnoComponent } from './aalumno/formAlumno.component';
//modulo de formularios
import { FormsModule } from '@angular/forms';
import { UsuariosComponent } from './usuarios/usuarios.component';

import { HttpClientModule } from '@angular/common/http';
import { DatosComponent } from './datos/datos.component'

@NgModule({
  declarations: [
    AppComponent,
    PieComponent,
    CursoComponent,
    CabeceraComponent,
    FormComponent,
    EscuelamainComponent,
    AalumnoComponent,
    FormAlumnoComponent,
    UsuariosComponent,
    DatosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
