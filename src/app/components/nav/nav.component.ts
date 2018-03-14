import { Component, OnInit } from '@angular/core';
import { ArtworkService } from '../../services/artwork.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit  {
  title: string;
  constructor() { }

  ngOnInit() {
  }

  cleanBar(){
    this.title = '';
  }
}

