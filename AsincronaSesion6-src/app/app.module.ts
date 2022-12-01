import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MiProyetoReactiveFormComponent } from './mi-proyeto-reactive-form/mi-proyeto-reactive-form.component';
import { MiProyetoTemplateFormComponent } from './mi-proyeto-template-form/mi-proyeto-template-form.component';

@NgModule({
  declarations: [
    AppComponent,
    MiProyetoReactiveFormComponent,
    MiProyetoTemplateFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}