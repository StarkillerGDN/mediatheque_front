import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import { environment } from '../../environments/environment';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

@Injectable()
export class ArtworkService {
  //Url server
  private baseUrl = environment.baseUrlService;
  //Type de content used : JSON
  private headers = new Headers({'Content-type' : 'application/json'});
  private options = new RequestOptions({headers: this.headers});
  constructor(private http: Http) { }

  //Acces aux oeuvres
  getFilms() {
    return this.http.get(this.baseUrl + '/films', this.options).map((response: Response)=>response.json()).catch(this.errorHandler);
  }

  getSeries(){
    return this.http.get(this.baseUrl + '/series', this.options).map((response: Response)=>response.json()).catch(this.errorHandler);
  }

  getMusics(){
    return this.http.get(this.baseUrl + '/musics', this.options).map((response: Response)=>response.json()).catch(this.errorHandler);
  }

  getArtwork(id: Number) {
    return this.http.get(this.baseUrl + '/artworks/' + id, this.options).map((response: Response)=>response.json()).catch(this.errorHandler);
  }

  //Acces aux personnes
  getDirectors(){
    return this.http.get(this.baseUrl + '/directors', this.options).map((response: Response)=>response.json()).catch(this.errorHandler);
  }

  getDirector(id: Number){
    return this.http.get(this.baseUrl + '/directors/' + id, this.options).map((response: Response)=>response.json()).catch(this.errorHandler);
  }

  getActors(){
    return this.http.get(this.baseUrl + '/actors', this.options).map((response: Response)=>response.json()).catch(this.errorHandler);
  }

  getActor(id: Number){
    return this.http.get(this.baseUrl + '/actors/' + id, this.options).map((response: Response)=>response.json()).catch(this.errorHandler);
  }

  getArtists(){
    return this.http.get(this.baseUrl + '/artists', this.options).map((response: Response)=>response.json()).catch(this.errorHandler);
  }

  getArtist(id: Number){
    return this.http.get(this.baseUrl + '/artists/' + id, this.options).map((response: Response)=>response.json()).catch(this.errorHandler);
  }

  //Acces aux filtres
  findFilmByDirector(name: string){
    return this.http.get(this.baseUrl + '/films/byDirector/' + name, this.options).map((response: Response)=>response.json()).catch(this.errorHandler);
  }

  findSerieByDirector(name: string){
    return this.http.get(this.baseUrl + '/series/byDirector/' + name, this.options).map((response: Response)=>response.json()).catch(this.errorHandler);
  }

  findFilmByActor(name: string){
    return this.http.get(this.baseUrl + '/films/byActor/' + name, this.options).map((response: Response)=>response.json()).catch(this.errorHandler);
  }

  findSerieByActor(name: string){
    return this.http.get(this.baseUrl + '/series/byActor/' + name, this.options).map((response: Response)=>response.json()).catch(this.errorHandler);
  }

  findMusicByArtist(name: string){
    return this.http.get(this.baseUrl + '/musics/byArtist/' + name, this.options).map((response: Response)=>response.json()).catch(this.errorHandler);
  }

  findByTitle(title: string){
    return this.http.get(this.baseUrl + '/artworks/byTitle/' + title, this.options).map((response: Response)=>response.json()).catch(this.errorHandler);
  }

  findFilmByYear(year: number){
    return this.http.get(this.baseUrl + '/films/byYear/' + year, this.options).map((response: Response)=>response.json()).catch(this.errorHandler);
  }

  findSerieByYear(year: number){
    return this.http.get(this.baseUrl + '/series/byYear/' + year, this.options).map((response: Response)=>response.json()).catch(this.errorHandler);
  }

  findMusicByYear(year: number){
    return this.http.get(this.baseUrl + '/musics/byYear/' + year, this.options).map((response: Response)=>response.json()).catch(this.errorHandler);
  }


  //Récupération de l'erreur
  errorHandler(error: Response){
    return Observable.throw(error || "SERVER ERROR");
  }


}
