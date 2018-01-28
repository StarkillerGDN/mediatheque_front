import { Component, OnInit, OnDestroy } from '@angular/core';
import { Film } from '../../film';
import { Serie } from '../../serie';
import { Musique } from '../../musique';

import { ActivatedRoute } from '@angular/router';
import { OeuvreService } from '../../services/oeuvre.service';

@Component({
  selector: 'app-list-oeuvres',
  templateUrl: './list-oeuvres.component.html',
  styleUrls: ['./list-oeuvres.component.css']
})
export class ListOeuvresComponent implements OnInit, OnDestroy {
  catOeuvre: string;
  private sub: any;
  oeuvres: any[];
  titre: string;

  constructor(private oeuvreService: OeuvreService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getRouteParam();
  }

   //Récupération id oeuvre select
   getRouteParam(){
    this.sub = this.route.params.subscribe(params => {
    this.catOeuvre = params['cat']; // (+) converts string 'id' to a number
    this.getOeuvres();
   });
  }

  //Requete sur l'oeuvre select
  getOeuvres(){
    if(this.catOeuvre == "films"){

      this.oeuvreService.getFilms().subscribe((oeuvres)=>{
        console.log(oeuvres);
        this.oeuvres = oeuvres;
      }, (error)=>{
        console.log(error);
      });

      this.titre = "Films"

    } else if(this.catOeuvre == "series"){

      this.oeuvreService.getSeries().subscribe((oeuvres)=>{
        console.log(oeuvres);
        this.oeuvres = oeuvres;
      }, (error)=>{
        console.log(error);
      });

      this.titre = "Séries"

    } else if(this.catOeuvre == "musiques"){

      this.oeuvreService.getMusiques().subscribe((oeuvres)=>{
        console.log(oeuvres);
        this.oeuvres = oeuvres;
      }, (error)=>{
        console.log(error);
      });
      this.titre = "Musiques"
    }
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}

