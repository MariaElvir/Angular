import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MisProyectosComponent } from './mis-proyectos/mis-proyectos.component';
import { FormsModule } from '@angular/forms';
import { TablaHijoComponent } from './tabla-hijo/tabla-hijo.component';

@NgModule({
  declarations: [
    AppComponent,
    MisProyectosComponent,
    TablaHijoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
