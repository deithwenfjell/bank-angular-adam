import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfilComponent } from './profil/profil.component';
import { ProfilListComponent } from './profil-list/profil-list.component';
import { ProfilEditComponent } from './profil-edit/profil-edit.component';
import { UctyComponent } from './ucty/ucty.component';
import { UctyDetailComponent } from './ucty-detail/ucty-detail.component';
import { ReportyComponent } from './reporty/reporty.component';
import { PlatobnaBranaComponent } from './platobna-brana/platobna-brana.component';


const routes: Routes = [
  {path: 'profil/:id', component: ProfilComponent},
  {path: 'profil-list', component: ProfilListComponent},
  {path: 'profil-edit/:id', component: ProfilEditComponent},
  {path: 'ucty', component: UctyComponent},
  {path: 'transakcia/:id', component: UctyDetailComponent},
  {path: 'reporty/:id', component: ReportyComponent},
  {path: 'platba', component: PlatobnaBranaComponent},
  {path: '', redirectTo: 'profil-list', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }