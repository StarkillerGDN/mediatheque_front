import { Film } from './film';
import { Serie } from './serie';

export class Acteur {
  id: Number;
  nom: string;
  prenom: string;
  films: Film[];
  series: Serie[];
  image: string;
}
