import { Film } from './film';
import { Serie } from './serie';

export class Actor {
  id: Number;
  name: string;
  firstname: string;
  films: Film[];
  series: Serie[];
  image: string;
}
