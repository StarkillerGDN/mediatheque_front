import { Director } from './director';
import { Actor } from './actor';

export class Serie {
  id: Number;
  title: string;
  year: Number;
  duration: Number;
  description: string;
  image: string;
  type: string;
  director: Director;
  actors: Actor[];
}
