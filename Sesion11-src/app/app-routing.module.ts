import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './body/body.component';
import { MenuComponent } from './menu/menu.component';
import { TablaComponent } from './tabla/tabla.component';

const routes: Routes = [
  {path: '', redirectTo: '/main', pathMatch: 'full'},
  {path: 'main', component: BodyComponent},
  {path: 'menu', component: MenuComponent},
  {path: 'tabla', component: TablaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
