import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfilComponent } from './profil/profil.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { KlientService } from './klient.service';
import { ProfilEditComponent } from './profil-edit/profil-edit.component';
import { ProfilListComponent } from './profil-list/profil-list.component';
import { UcetService } from './ucet.service';
import { UctyComponent } from './ucty/ucty.component';
import { UctyDetailComponent } from './ucty-detail/ucty-detail.component';
import { ReportyComponent } from './reporty/reporty.component';
import { PlatobnaBranaComponent } from './platobna-brana/platobna-brana.component';

@NgModule({
   declarations: [
      AppComponent,
      ProfilComponent,
      ProfilEditComponent,
      ProfilListComponent,
      UctyComponent,
      UctyDetailComponent,
      ReportyComponent,
      PlatobnaBranaComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      BrowserAnimationsModule,
      FormsModule,
      MatToolbarModule,
      MatButtonModule,
      MatMenuModule,
      MatIconModule,
      MatListModule,
      MatCardModule,
      MatTableModule,
      MatFormFieldModule,
      MatSelectModule,
      MatInputModule

   ],
   providers: [
      KlientService,
      UcetService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
