import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { BodyComponent } from './body/body.component';
import { MenuComponent } from './menu/menu.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

//Para los iconos
import {MatIconModule} from '@angular/material/icon';
//Para los botones
import {MatButtonModule} from '@angular/material/button';
//Para la cabecera
import {MatToolbarModule} from '@angular/material/toolbar';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSliderModule } from '@angular/material/slider';
import {MatMenuModule} from '@angular/material/menu';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input'; 
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { TablaComponent } from './tabla/tabla.component';
import {CdkTableModule} from '@angular/cdk/table';



@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    BodyComponent,
    MenuComponent,
    TablaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    RouterModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatSliderModule,
    MatCheckboxModule,
    MatMenuModule,
    MatRadioModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    FormsModule,
    CdkTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
