import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HttpModule} from '@angular/http';
import { ModalModule } from 'ngx-bootstrap/modal';

import { AppComponent } from './app.component';
import { ListOeuvresComponent } from './components/list-oeuvres/list-oeuvres.component';
import { NavComponent } from './components/nav/nav.component';
import { OeuvreDetailComponent } from './components/oeuvre-detail/oeuvre-detail.component';
import { HomeComponent } from './components/home/home.component';
import { OeuvreService } from './services/oeuvre.service';
import { FormsModule } from '@angular/forms';


const appRoutes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'browse/:cat', component: ListOeuvresComponent},
  {path: 'oeuvre/:id', component: OeuvreDetailComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    ListOeuvresComponent,
    NavComponent,
    OeuvreDetailComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpModule,
    ModalModule.forRoot(),
    FormsModule
  ],
  providers: [OeuvreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
