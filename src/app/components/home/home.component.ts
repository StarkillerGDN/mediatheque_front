import { Component, OnInit, Input } from '@angular/core';
import { Film } from '../../entities/film';
import { ArtworkService } from '../../services/artwork.service';
import { Serie } from '../../entities/serie';
import { Music } from '../../entities/music';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private films: Film[];
  private series: Serie[];
  private musics: Music[];
  private year: Date = new Date();

  constructor(private artworkService: ArtworkService ) { }

  ngOnInit() {
    this.artworkService.findFilmByYear(this.year.getFullYear()).subscribe((films)=>{
      console.log(films);
        this.films = films;
    }, (error)=>{
      console.log(error);
    });

    this.artworkService.findSerieByYear(this.year.getFullYear()).subscribe((series)=>{
      console.log(series);
        this.series = series;
    }, (error)=>{
      console.log(error);
    });

    this.artworkService.findMusicByYear(this.year.getFullYear()).subscribe((musics)=>{
      console.log(musics);
        this.musics = musics;
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
  getMusics(): Music[]{
    return this.musics;
  }

  setMusics(musics: Music[]) {
    this.musics = musics;
  }


}
