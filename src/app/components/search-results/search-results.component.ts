import { Component, OnInit, OnDestroy } from '@angular/core';
import { ArtworkService } from '../../services/artwork.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit, OnDestroy {
  tabArtworks: any[];
  title: string = '';
  private sub: any;
  constructor(private artworkService: ArtworkService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getRouteParam();
  }

  //Récupération titre cherché
  getRouteParam(){
    this.sub = this.route.params.subscribe(params => {
    this.title = params['title'];
    this.searchArtwork(this.title);
   });
  }
  //Appel du service pour récup les données
  searchArtwork(title: string){
    this.artworkService.findByTitle(title).subscribe((artworks)=>{
      this.tabArtworks = artworks;
    }, (error)=>{
      console.log(error);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
