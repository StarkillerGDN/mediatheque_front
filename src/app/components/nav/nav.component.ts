import { Component, OnInit } from '@angular/core';
import { OeuvreService } from '../../services/oeuvre.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  titre: string ="";
  tabOeuvre: any[];
  constructor(private oeuvreService: OeuvreService) { }

  ngOnInit() {
  }

  chercherOeuvre(){
    this.oeuvreService.findByTitre(this.titre).subscribe((oeuvres)=>{
      console.log(oeuvres);
      this.tabOeuvre = oeuvres;
    }, (error)=>{
      console.log(error);
    });
  }
}
