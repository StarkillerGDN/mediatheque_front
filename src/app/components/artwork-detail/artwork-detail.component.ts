import { Component, OnInit, OnDestroy } from '@angular/core';
import { Film } from '../../entities/film';
import { ArtworkService } from '../../services/artwork.service';
import { Serie } from '../../entities/serie';
import { Music } from '../../entities/music';

import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-artwork-detail',
  templateUrl: './artwork-detail.component.html',
  styleUrls: ['./artwork-detail.component.css']
})
export class ArtworkDetailComponent implements OnInit, OnDestroy  {
  artwork: any;
  id: number;
  private sub: any;
  constructor(private artworkService: ArtworkService, private route: ActivatedRoute) { }

  ngOnInit() {

    this.getRouteParam();

  }

  //Récupération id oeuvre select
  getRouteParam(){
    this.sub = this.route.params.subscribe(params => {
    this.id = +params['id']; // (+) converts string 'id' to a number
    this.getSelectedArtwork();
   });
  }

  //Requete sur l'oeuvre select
  getSelectedArtwork(){
    this.artworkService.getArtwork(this.id).subscribe((artwork)=>{
      console.log(artwork);
      this.artwork = artwork;
    }, (error)=>{
      console.log(error);
    });
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}

