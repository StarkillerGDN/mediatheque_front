import { Component, OnInit, OnDestroy } from '@angular/core';
import { Film } from '../../film';
import { OeuvreService } from '../../services/oeuvre.service';
import { Serie } from '../../serie';
import { Musique } from '../../musique';

import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-oeuvre-detail',
  templateUrl: './oeuvre-detail.component.html',
  styleUrls: ['./oeuvre-detail.component.css']
})
export class OeuvreDetailComponent implements OnInit, OnDestroy  {
  oeuvre: any;
  id: number;
  private sub: any;
  constructor(private oeuvreService: OeuvreService, private route: ActivatedRoute) { }

  ngOnInit() {

    this.getRouteParam();

  }

  //Récupération id oeuvre select
  getRouteParam(){
    this.sub = this.route.params.subscribe(params => {
    this.id = +params['id']; // (+) converts string 'id' to a number
    this.getOeuvreEnCours();
   });
  }

  //Requete sur l'oeuvre select
  getOeuvreEnCours(){
    this.oeuvreService.getOeuvre(this.id).subscribe((oeuvre)=>{
      console.log(oeuvre);
      this.oeuvre = oeuvre;
    }, (error)=>{
      console.log(error);
    });
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}

