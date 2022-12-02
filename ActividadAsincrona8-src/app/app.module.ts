import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PeruComponent } from './peru/peru.component';
import { ChileComponent } from './chile/chile.component';
import { UruguayComponent } from './uruguay/uruguay.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { AsideComponent } from './aside/aside.component';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    PeruComponent,
    ChileComponent,
    UruguayComponent,
    CabeceraComponent,
    AsideComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
