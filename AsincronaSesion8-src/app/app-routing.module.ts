import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChileComponent } from './chile/chile.component';
import { MainComponent } from './main/main.component';
import { PeruComponent } from './peru/peru.component';
import { UruguayComponent } from './uruguay/uruguay.component';

const routes: Routes = [
  {path: '', redirectTo: '/main', pathMatch: 'full'},
  {path: 'main', component: MainComponent},
  {path: 'peru', component: PeruComponent},
  {path: 'chile', component: ChileComponent},
  {path: 'uruguay', component: UruguayComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
