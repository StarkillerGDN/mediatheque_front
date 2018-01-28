import { Component, OnInit, Input } from '@angular/core';
import { Film } from '../../film';
import { OeuvreService } from '../../services/oeuvre.service';
import { Serie } from '../../serie';
import { Musique } from '../../musique';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private films: Film[];
  private series: Serie[];
  private musiques: Musique[];
  private annee: Date = new Date();

  constructor(private oeuvreService: OeuvreService ) { }

  ngOnInit() {
    this.oeuvreService.findFilmByAnnee(this.annee.getFullYear()).subscribe((films)=>{
      console.log(films);
        this.films = films;
    }, (error)=>{
      console.log(error);
    });

    this.oeuvreService.findSerieByAnnee(this.annee.getFullYear()).subscribe((series)=>{
      console.log(series);
        this.series = series;
    }, (error)=>{
      console.log(error);
    });

    this.oeuvreService.findMusiqueByAnnee(this.annee.getFullYear()).subscribe((musiques)=>{
      console.log(musiques);
        this.musiques = musiques;
    }, (error)=>{
      console.log(error);
    });
  }

  getFilms(): Film[] {
    return this.films;
  }

  setFilms(films: Film[]) {
    this.films = films;
  }
  getSeries(): Serie[]{
    return this.series;
  }

  setSeries(series: Serie[]) {
    this.series = series;
  }
  getMusiques(): Musique[]{
    return this.musiques;
  }

  setMusiques(musiques: Musique[]) {
    this.musiques = musiques;
  }


}
