import { Artist } from './artist';

export class Music {
  id: Number;
  title: string;
  year: Number;
  duration: Number;
  description: string;
  image: string;
  type: string;
  artists: Artist[];
}
