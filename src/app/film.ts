import { Realisateur } from './realisateur';
import { Acteur } from './acteur';

export class Film {
  id: Number;
  titre: string;
  annee: Number;
  duree: Number;
  description: string;
  image: string;
  genre: string;
  realisateur: Realisateur;
  acteurs: Acteur[];
}
