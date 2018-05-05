import { Component, OnInit, OnDestroy } from '@angular/core';
import { Film } from '../../entities/film';
import { Serie } from '../../entities/serie';
import { Music } from '../../entities/music';

import { ActivatedRoute } from '@angular/router';
import { ArtworkService } from '../../services/artwork.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-list-artworks',
  templateUrl: './list-artworks.component.html',
  styleUrls: ['./list-artworks.component.css']
})
export class ListArtworksComponent implements OnInit, OnDestroy {
  catArtwork: string;
  private sub: any;
  artworks: any = [];
  artworksFilteredByType: any = []; //Sauvegarde qui permet de filtrer par type car pas de services dispo
  title: string;
  currentYear = new Date();
  tabYear: number[] = [];
  tabType: string[] = [];
  checkCat: boolean;
  chosenActor = '';
  chosenDirector = '';
  chosenArtist = '';
  chosenYear = 'Année';
  chosenYearInt: number;
  chosenType = 'Genre';
  chosenTypeTempo = '';
  isCheck = false; //condition d'activation de la liste déroulante
  //Désactive les champs lorsqu'il y a un des 4 champs qui est utilisé
  disableDirectorInput = false;
  disableArtistInput = false;
  disableActorInput = false;
  disableYearInput = false;
  disableTypeInput = false;

  constructor(private artworkService: ArtworkService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getRouteParam();
    this.fillYearFilter();
  }

   //Récupération id oeuvre select
   getRouteParam(){
    this.sub = this.route.params.subscribe(params => {
    this.catArtwork = params['cat'];
    this.getArtworks();
   });
  }

  //Requete sur l'oeuvre select
  getArtworks(){

    this.fillTypeFilter(this.catArtwork);

    if(this.catArtwork == "films"){
      this.artworkService.getFilms().subscribe((artworks)=>{
        console.log(artworks);
        this.artworks = artworks;
        this.artworksFilteredByType = artworks;
      }, (error)=>{
        console.log(error);
      });


      this.title = "Films"
      this.checkCat = true;

      console.log(this.tabType);

    } else if(this.catArtwork == "series"){

      this.artworkService.getSeries().subscribe((artworks)=>{
        console.log(artworks);
        this.artworks = artworks;
        this.artworksFilteredByType = artworks;
      }, (error)=>{
        console.log(error);
      });

      this.title = "Séries"
      this.checkCat = true;

    } else if(this.catArtwork == "musics"){

      this.artworkService.getMusics().subscribe((artworks)=>{
        console.log(artworks);
        this.artworks = artworks;
        this.artworksFilteredByType = artworks;
      }, (error)=>{
        console.log(error);
      });
      this.title = "Musiques"
      this.checkCat = false;
    }
  }

  fillYearFilter(){
    for(let i = 1950; i <= this.currentYear.getFullYear(); i++){
      this.tabYear.push(i);
    }
  }

  fillTypeFilter(cat: string){
    if (cat == "films" || cat == "series"){
      this.tabType = ["Action", "Aventure", "Animation", "Policier", "Fantastique", "Horreur"];
    } else {
      this.tabType = ["Pop", "Rock", "Electro", "Rap", "Classique"];
    }
  }

  filterContent(){
    //Requetes par rapport aux champs du filtre
    if(this.catArtwork == 'films'){
      if(this.chosenActor != ''){
        this.isCheck =  false;
        this.artworkService.findFilmByActor(this.chosenActor).subscribe((artworks)=>{
          this.artworks = artworks;
        }, (error)=>{
          console.log(error);
        });
      }
      if(this.chosenDirector != ''){
        this.isCheck =  false;
        this.artworkService.findFilmByDirector(this.chosenDirector).subscribe((artworks)=>{
          this.artworks = artworks;
        }, (error)=>{
          console.log(error);
        });
      }
      if(this.chosenYear != 'Année'){
        this.isCheck =  false;
        this.chosenYearInt = +this.chosenYear;
        this.artworkService.findFilmByYear(this.chosenYearInt).subscribe((artworks)=>{
          this.artworks = artworks;
        }, (error)=>{
          console.log(error);
        });
      }
      if(this.chosenType != 'Genre'){
        this.isCheck = true;
        this.chosenType = this.chosenType.toUpperCase();
        this.chosenTypeTempo = this.chosenType;
      }

    } else if(this.catArtwork == 'series'){
      if(this.chosenActor != ''){
        this.isCheck =  false;
        this.artworkService.findSerieByActor(this.chosenActor).subscribe((artworks)=>{
          console.log(this.artworks);
          this.artworks = artworks;
        }, (error)=>{
          console.log(error);
        });
      }
      if(this.chosenDirector != ''){
        this.isCheck =  false;
        this.artworkService.findSerieByDirector(this.chosenDirector).subscribe((artworks)=>{
          this.artworks = artworks;
        }, (error)=>{
          console.log(error);
        });
      }
      if(this.chosenYear != 'Année'){
        this.isCheck =  false;
        this.chosenYearInt = +this.chosenYear;
        this.artworkService.findSerieByYear(this.chosenYearInt).subscribe((artworks)=>{
          this.artworks = artworks;
        },(error)=>{
          console.log(error);
        });
      }
      if(this.chosenType != 'Genre'){
        this.isCheck = true;
        this.chosenType = this.chosenType.toUpperCase();
        this.chosenTypeTempo = this.chosenType;
      }

    } else if(this.catArtwork == 'musics'){
      this.isCheck =  false;
      if(this.chosenArtist != ''){
        this.artworkService.findMusicByArtist(this.chosenArtist).subscribe((artworks)=>{
          this.artworks = artworks;
        }, (error)=>{
          console.log(error);
        });
      }
      if(this.chosenYear != 'Année'){
        this.isCheck =  false;
        this.chosenYearInt = +this.chosenYear;
        this.artworkService.findMusicByYear(this.chosenYearInt).subscribe((artworks)=>{
          this.artworks = artworks;
        },(error)=>{
          console.log(error);
        });
      }
      if(this.chosenType != 'Genre'){
        this.isCheck = true;
        this.chosenType = this.chosenType.toUpperCase();
        this.chosenTypeTempo = this.chosenType;
      }

    }
    // Clear des champs
    this.chosenArtist = '';
    this.chosenActor = '';
    this.chosenDirector = '';
    this.chosenYear = 'Année';
    this.chosenType = 'Genre';
  }

  disableInput(event){
    if(event.target.id == "acteur_filtre"){
      if(event.type == 'keypress'){
        this.disableActorInput = false;
        this.disableDirectorInput = true;
        this.disableTypeInput = true;
        this.disableYearInput =true;
      }else if(event.type == 'mouseleave' && this.chosenActor == ''){
        this.disableActorInput = false;
        this.disableDirectorInput = false;
        this.disableTypeInput = false;
        this.disableYearInput = false;
      }
    }
    if(event.target.id == "realisateur_filtre"){
      if(event.type == 'keypress'){
        this.disableActorInput = true;
        this.disableDirectorInput = false;
        this.disableTypeInput = true;
        this.disableYearInput =true;
      }else if(event.type == 'mouseleave' && this.chosenDirector == ''){
        this.disableActorInput = false;
        this.disableDirectorInput = false;
        this.disableTypeInput = false;
        this.disableYearInput = false;
      }
    }
    if(event.target.id == "annee_filtre"){
      if(event.type == 'focus'){
        this.disableActorInput = true;
        this.disableDirectorInput = true;
        this.disableTypeInput = true;
        this.disableYearInput = false;
      }else if(event.type == 'mouseleave' && this.chosenYear == 'Année'){
        this.disableActorInput = false;
        this.disableDirectorInput = false;
        this.disableTypeInput = false;
        this.disableYearInput = false;
      }
    }
    if(event.target.id == "genre_filtre"){
      if(event.type == 'focus'){
        this.disableActorInput = true;
        this.disableDirectorInput = true;
        this.disableTypeInput = false;
        this.disableYearInput = true;
      }else if(event.type == 'mouseleave' &&  this.chosenType == 'Genre'){
        this.disableActorInput = false;
        this.disableDirectorInput = false;
        this.disableTypeInput = false;
        this.disableYearInput = false;
      }

    }
    if(event.target.id == "artist_filtre"){
      if(event.type == 'keypress'){
        this.disableArtistInput = false;
        this.disableTypeInput = true;
        this.disableYearInput = true;
      }else if(event.type == 'mouseleave' && this.chosenType == 'Genre'){
        this.disableArtistInput = false;
        this.disableTypeInput = false;
        this.disableYearInput = false;
      }
    }
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}

