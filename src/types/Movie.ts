export interface Movie {
  imdbID: string;
  Title: string;
  Poster: string;
  Director: string;
  Year: number | null;
}

export type NewMovie = Omit<Movie, 'imdbID'>;