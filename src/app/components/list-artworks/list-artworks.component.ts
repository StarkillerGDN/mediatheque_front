import { Component, OnInit, OnDestroy } from '@angular/core';
import { Film } from '../../entities/film';
import { Serie } from '../../entities/serie';
import { Music } from '../../entities/music';

import { ActivatedRoute } from '@angular/router';
import { ArtworkService } from '../../services/artwork.service';

@Component({
  selector: 'app-list-artworks',
  templateUrl: './list-artworks.component.html',
  styleUrls: ['./list-artworks.component.css']
})
export class ListArtworksComponent implements OnInit, OnDestroy {
  catArtwork: string;
  private sub: any;
  artworks: any[];
  title: string;

  constructor(private artworkService: ArtworkService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getRouteParam();
  }

   //Récupération id oeuvre select
   getRouteParam(){
    this.sub = this.route.params.subscribe(params => {
    this.catArtwork = params['cat']; // (+) converts string 'id' to a number
    this.getArtworks();
   });
  }

  //Requete sur l'oeuvre select
  getArtworks(){
    if(this.catArtwork == "films"){

      this.artworkService.getFilms().subscribe((artworks)=>{
        console.log(artworks);
        this.artworks = artworks;
      }, (error)=>{
        console.log(error);
      });

      this.title = "Films"

    } else if(this.catArtwork == "series"){

      this.artworkService.getSeries().subscribe((artworks)=>{
        console.log(artworks);
        this.artworks = artworks;
      }, (error)=>{
        console.log(error);
      });

      this.title = "Séries"

    } else if(this.catArtwork == "musics"){

      this.artworkService.getMusics().subscribe((artworks)=>{
        console.log(artworks);
        this.artworks = artworks;
      }, (error)=>{
        console.log(error);
      });
      this.title = "Musiques"
    }
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}

