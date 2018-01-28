import { Musique } from './musique';

export class Artiste {
  id: Number;
  nom: string;
  prenom: string;
  musiques: Musique[];
  image: string;
}
