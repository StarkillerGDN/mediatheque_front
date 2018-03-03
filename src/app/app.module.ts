import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HttpModule} from '@angular/http';
import { ModalModule } from 'ngx-bootstrap/modal';

import { AppComponent } from './app.component';
import { ListArtworksComponent } from './components/list-artworks/list-artworks.component';
import { NavComponent } from './components/nav/nav.component';
import { ArtworkDetailComponent } from './components/artwork-detail/artwork-detail.component';
import { HomeComponent } from './components/home/home.component';
import { ArtworkService } from './services/artwork.service';
import { FormsModule } from '@angular/forms';


const appRoutes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'browse/:cat', component: ListArtworksComponent},
  {path: 'artwork/:id', component: ArtworkDetailComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    ListArtworksComponent,
    NavComponent,
    ArtworkDetailComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpModule,
    ModalModule.forRoot(),
    FormsModule
  ],
  providers: [ArtworkService],
  bootstrap: [AppComponent]
})
export class AppModule { }
