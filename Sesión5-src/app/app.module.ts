import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { ImagenRotaDirective } from './imagen-rota.directive';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    ImagenRotaDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
