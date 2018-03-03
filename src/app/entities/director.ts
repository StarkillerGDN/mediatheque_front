import { Film } from './film';
import { Serie } from './serie';

export class Director {
  id: Number;
  name: string;
  firstname: string;
  films: Film[];
  series: Serie[];
}
