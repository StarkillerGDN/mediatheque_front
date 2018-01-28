import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

@Injectable()
export class OeuvreService {
  private baseUrl:string="http://localhost:8080";
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

  getMusiques(){
    return this.http.get(this.baseUrl + '/musiques', this.options).map((response: Response)=>response.json()).catch(this.errorHandler);
  }

  getOeuvre(id: Number) {
    return this.http.get(this.baseUrl + '/oeuvres/' + id, this.options).map((response: Response)=>response.json()).catch(this.errorHandler);
  }

  //Acces aux personnes
  getRealisateurs(){
    return this.http.get(this.baseUrl + '/realisateurs', this.options).map((response: Response)=>response.json()).catch(this.errorHandler);
  }

  getRealisateur(id: Number){
    return this.http.get(this.baseUrl + '/realisateurs/' + id, this.options).map((response: Response)=>response.json()).catch(this.errorHandler);
  }

  getActeurs(){
    return this.http.get(this.baseUrl + '/acteurs', this.options).map((response: Response)=>response.json()).catch(this.errorHandler);
  }

  getActeur(id: Number){
    return this.http.get(this.baseUrl + '/acteurs/' + id, this.options).map((response: Response)=>response.json()).catch(this.errorHandler);
  }

  getArtistes(){
    return this.http.get(this.baseUrl + '/artistes', this.options).map((response: Response)=>response.json()).catch(this.errorHandler);
  }

  getArtiste(id: Number){
    return this.http.get(this.baseUrl + '/artistes/' + id, this.options).map((response: Response)=>response.json()).catch(this.errorHandler);
  }

  //Acces aux filtres
  findFilmByRealisateur(nom: string){
    return this.http.get(this.baseUrl + '/films/byRealisateur/' + nom, this.options).map((response: Response)=>response.json()).catch(this.errorHandler);
  }

  findSerieByRealisateur(nom: string){
    return this.http.get(this.baseUrl + '/series/byRealisateur/' + nom, this.options).map((response: Response)=>response.json()).catch(this.errorHandler);
  }

  findFilmByActeur(nom: string){
    return this.http.get(this.baseUrl + '/films/byActeur/' + nom, this.options).map((response: Response)=>response.json()).catch(this.errorHandler);
  }

  findSerieByActeur(nom: string){
    return this.http.get(this.baseUrl + '/series/byActeur/' + nom, this.options).map((response: Response)=>response.json()).catch(this.errorHandler);
  }

  findMusiqueByArtiste(nom: string){
    return this.http.get(this.baseUrl + '/musiques/byArtiste/' + nom, this.options).map((response: Response)=>response.json()).catch(this.errorHandler);
  }

  findByTitre(titre: string){
    return this.http.get(this.baseUrl + '/oeuvres/byTitre/' + titre, this.options).map((response: Response)=>response.json()).catch(this.errorHandler);
  }

  findFilmByAnnee(annee: Number){
    return this.http.get(this.baseUrl + '/films/byAnnee/' + annee, this.options).map((response: Response)=>response.json()).catch(this.errorHandler);
  }

  findSerieByAnnee(annee: Number){
    return this.http.get(this.baseUrl + '/series/byAnnee/' + annee, this.options).map((response: Response)=>response.json()).catch(this.errorHandler);
  }

  findMusiqueByAnnee(annee: Number){
    return this.http.get(this.baseUrl + '/musiques/byAnnee/' + annee, this.options).map((response: Response)=>response.json()).catch(this.errorHandler);
  }


  //Récupération de l'erreur
  errorHandler(error: Response){
    return Observable.throw(error || "SERVER ERROR");
  }


}
