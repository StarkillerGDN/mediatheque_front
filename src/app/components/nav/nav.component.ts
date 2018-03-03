import { Component, OnInit } from '@angular/core';
import { ArtworkService } from '../../services/artwork.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  title: string ="";
  tabArtworks: any[];
  constructor(private artworkService: ArtworkService) { }

  ngOnInit() {
  }

  searchArtwork(){
    this.artworkService.findByTitle(this.title).subscribe((artworks)=>{
      console.log(artworks);
      this.tabArtworks = artworks;
    }, (error)=>{
      console.log(error);
    });
  }
}
