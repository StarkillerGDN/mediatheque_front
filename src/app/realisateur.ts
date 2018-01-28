import { Film } from './film';
import { Serie } from './serie';

export class Realisateur {
  id: Number;
  nom: string;
  prenom: string;
  films: Film[];
  series: Serie[];
}
