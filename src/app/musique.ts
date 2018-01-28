import { Artiste } from './artiste';

export class Musique {
  id: Number;
  titre: string;
  annee: Number;
  duree: Number;
  description: string;
  image: string;
  genre: string;
  artiste: Artiste[];
}
